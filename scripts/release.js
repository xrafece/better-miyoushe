import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const args = process.argv.slice(2);
const versionArg = args[0];
const commitMsg = args[1] || `chore: release v{version}`;
const tagMsg = args[2] || `Release v{version}`;

if (!versionArg) {
  console.error('Usage: node scripts/release.js <patch|minor|major|x.x.x> [commit message] [tag message]');
  console.error('Example: node scripts/release.js patch "fix: bug fixes" "Release v{version}"');
  process.exit(1);
}

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const [major, minor, patch] = pkg.version.split('.').map(Number);

let newVersion;
if (versionArg === 'patch') {
  newVersion = `${major}.${minor}.${patch + 1}`;
} else if (versionArg === 'minor') {
  newVersion = `${major}.${minor + 1}.0`;
} else if (versionArg === 'major') {
  newVersion = `${major + 1}.0.0`;
} else {
  newVersion = versionArg;
}

pkg.version = newVersion;
writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

const finalCommitMsg = commitMsg.replace(/{version}/g, newVersion);
const finalTagMsg = tagMsg.replace(/{version}/g, newVersion);

execSync('git add package.json', { stdio: 'inherit' });
execSync(`git commit -m "${finalCommitMsg}"`, { stdio: 'inherit' });
execSync(`git tag -a v${newVersion} -m "${finalTagMsg}"`, { stdio: 'inherit' });
execSync('git push', { stdio: 'inherit' });
execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });

console.log(`✓ Released version ${newVersion}`);
