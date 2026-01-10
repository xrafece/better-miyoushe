# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Better Miyoushe** is a userscript/browser extension that enhances the Miyoushe (米游社) web interface. It beautifies pages, removes redundant content, and adds a character list panel with side buttons for quick access. The script is built with Vue 3, Vite, and uses the `vite-plugin-monkey` to generate a Tampermonkey-compatible userscript.

**Target Sites:**
- `https://www.miyoushe.com/*` - Main Miyoushe social platform
- `https://act.mihoyo.com/ys/event/calculator/*` - Genshin Impact calculator
- `https://act.mihoyo.com/ys/app/interactive-map/*` - Interactive map
- `https://baike.mihoyo.com/ys/*` - Genshin Impact wiki

## Development Commands

### Core Commands
```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
# This will run both the main project and the blob-html sub-project dev server
pnpm dev

# Build for production
pnpm build

# Build with minification
pnpm build:minify

# Type check and preview
pnpm preview

# Type check only (no emit)
pnpm type-check

# Lint with Prettier
pnpm lint

# Format code with Prettier
pnpm format
```

### Package Manager
- **Required:** pnpm (version 10.10.0+)
- The project uses pnpm workspace features

## Code Architecture

### Two-Project Structure

This is a **dual-project repository** with a unique architecture:

1. **Main Project (root)**: The userscript entry point that injects UI into target websites
2. **blob-html Project (`blob-html/`)**: A separate Vue app that renders the character list panel

**Why this structure?**
The character list panel needs to be displayed in a new browser window/tab. The `blob-html` sub-project is built into a single HTML file that can be:
- **Development mode**: Opened via dev server URL with HMR support
- **Production mode**: Converted to a blob URL and opened (enables same-origin localStorage access)

### Main Project Structure

```
src/
├── main.ts                    # Entry point: mounts Vue app, registers menu commands, overrides XHR
├── App.vue                    # Root component (just renders SideBtn)
├── view/
│   └── SideBtn.vue           # Draggable side button with refresh/hide/open panel controls
├── store/
│   └── view.ts               # Pinia stores for character panel, button state, localStorage keys
└── util/
    ├── request.ts            # API calls to Miyoushe/miHoYo (character list, user data)
    └── pageType.ts           # Page detection utilities (isMiyoushe, isYsCalculator, etc.)
```

### Virtual Module System

The project uses a custom Vite plugin (`plugins/vite-plugin-blob-html.ts`) that:
- Automatically builds the `blob-html` project during development/build
- Exposes the result via a **virtual module** `virtual:blob-html`
- In dev mode: provides the dev server URL (`http://localhost:5174`)
- In production: inlines the entire HTML string as a module export

**Import Pattern:**
```typescript
import blobHtmlContent, { isDev } from 'virtual:blob-html'
```

### blob-html Project

Located in `blob-html/`, this is a standalone Vue 3 app that:
- Displays the character list fetched from localStorage or API
- Built as a **single-file HTML** using `vite-plugin-singlefile`
- Uses CDN imports for Vue and lodash to reduce bundle size
- In dev mode, provides a mock API endpoint (`/api/character-list`) that reads from `src/assets/data.json`

**Data Flow:**
1. Main project fetches character data from Miyoushe API
2. Stores it in localStorage
3. blob-html reads from localStorage (production) or data.json (dev)
4. In dev mode, clicking "refresh" in main project writes data to `blob-html/src/assets/data.json`

### State Management

**Pinia Stores** (all use localStorage for persistence):
- `characterPanelStore`: Side button visibility state
- `characterListStore`: Cached character list data
- `characterDomStore`: Panel DOM visibility toggle

**LocalStorage Keys:**
- `better-miyoushe-character-list`: Character data cache
- `better-miyoushe-side-btn-pos`: Button position (draggable)
- `better-miyoushe-side-btn-show`: Button visibility

### Userscript Features

The project leverages **Tampermonkey APIs** (via `vite-plugin-monkey`):
- `GM_registerMenuCommand`: Registers menu items (toggle button, refresh list)
- `GM_xmlhttpRequest`: Cross-origin requests to Miyoushe API
- Vue/Pinia are loaded from CDN (jsdelivr) to reduce script size

### Page-Specific Behavior

The `src/util/pageType.ts` module detects the current page and adjusts behavior:
- **Miyoushe**: Shows side button with full features
- **Calculator**: Auto-refreshes character list via XHR override, no manual refresh menu
- **Interactive Map**: Hides side button completely

## Code Style & Formatting

- **Formatter**: Prettier with Tailwind CSS plugin
- **Settings**: 120 char line width, 4-space tabs, single quotes, no semicolons
- **TypeScript**: Strict mode enabled with noUnusedLocals/Parameters
- **Vue**: Composition API with `<script setup>`

### TypeScript Configuration

The project uses TypeScript project references for better IDE support:
- `tsconfig.json`: Root config that references other configs
- `tsconfig.app.json`: Config for application source code (`src/**/*`)
- `tsconfig.node.json`: Config for build tools (`vite.config.ts`, `plugins/**/*`)

This setup ensures PHPStorm/WebStorm correctly resolves Node.js APIs like `import.meta.url` and `node:*` imports in build scripts.

**Auto-imports:**
- Element Plus components are auto-imported via `unplugin-vue-components`
- Element Plus APIs are auto-imported via `unplugin-auto-import`

## Path Aliases

- `@/*` resolves to `src/*`

## Important Patterns

### XHR Override Pattern
In `src/util/request.ts`, the `overrideXHR()` function intercepts calculator page API responses to automatically cache character data without explicit user action.

### Draggable Button Pattern
`SideBtn.vue` uses `@vueuse/core` composables (`useDraggable`, `useElementBounding`, `useStorage`) to create a draggable, position-persisting button.

### Cross-Origin Data Access
Because userscripts run in a sandboxed environment, `GM_xmlhttpRequest` is required to bypass CORS restrictions when fetching data from Miyoushe APIs.

## Building blob-html Separately

If you need to work on `blob-html` independently:

```bash
cd blob-html
pnpm install
pnpm dev        # Starts dev server on port 5173
pnpm build      # Builds to blob-html/dist/index.html
```

**Note:** The main project's build process will automatically build blob-html, but you may want to build it separately during development for testing.
