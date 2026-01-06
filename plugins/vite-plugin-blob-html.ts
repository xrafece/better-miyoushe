import { Plugin, ResolvedConfig } from 'vite'
import { exec, ChildProcess, spawn } from 'child_process'
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, join, dirname } from 'path'

const VIRTUAL_MODULE_ID = 'virtual:blob-html'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID

interface BlobHtmlPluginOptions {
    /** blob-html 项目目录路径 (相对于主项目根目录) */
    blobHtmlDir?: string
    /** 开发服务器端口 */
    devPort?: number
}

export function blobHtmlPlugin(options: BlobHtmlPluginOptions = {}): Plugin {
    const { blobHtmlDir = 'blob-html', devPort = 5174 } = options

    let config: ResolvedConfig
    let blobHtmlPath: string
    let distPath: string
    let cachedHtml: string | null = null
    let devServerProcess: ChildProcess | null = null
    let isDevMode = false

    const buildBlobHtml = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            console.log('\n🔨 [blob-html] 开始构建内层 HTML...')

            exec('pnpm run build', { cwd: blobHtmlPath }, (error, stdout, stderr) => {
                if (error) {
                    console.error('❌ [blob-html] 构建失败:')
                    console.error(stderr || stdout || error.message)
                    reject(new Error(`blob-html build failed: ${error.message}`))
                    return
                }

                console.log('✅ [blob-html] 构建完成!')

                // 读取构建后的 HTML 文件
                const htmlPath = join(distPath, 'index.html')
                if (!existsSync(htmlPath)) {
                    reject(new Error(`构建产物不存在: ${htmlPath}`))
                    return
                }

                // 读取并去掉 \r (Windows 换行符)
                let html = readFileSync(htmlPath, 'utf-8')
                html = html.replace(/\r/g, '')
                cachedHtml = html
                resolve(html)
            })
        })
    }

    const startDevServer = (): Promise<string> => {
        return new Promise((resolvePromise, rejectPromise) => {
            console.log(`\n🚀 [blob-html] 启动开发服务器 (端口: ${devPort})...`)

            // 直接调用 vite 命令，避免参数传递问题
            devServerProcess = spawn('npx', ['vite', '--port', String(devPort)], {
                cwd: blobHtmlPath,
                stdio: ['pipe', 'pipe', 'pipe'],
                shell: true,
            })

            let started = false
            let outputBuffer = ''

            const checkStarted = (output: string) => {
                outputBuffer += output
                // 检测 Vite 服务器启动完成的多种标志
                if (
                    !started &&
                    (output.includes('Local:') ||
                        output.includes('localhost:') ||
                        output.includes('ready in') ||
                        output.includes('VITE'))
                ) {
                    started = true
                    console.log(`✅ [blob-html] 开发服务器已启动: http://localhost:${devPort}`)
                    resolvePromise(`http://localhost:${devPort}`)
                }
            }

            devServerProcess.stdout?.on('data', (data) => {
                const output = data.toString()
                console.log(`[blob-html stdout] ${output.trim()}`)
                checkStarted(output)
            })

            devServerProcess.stderr?.on('data', (data) => {
                const output = data.toString()
                // Vite 的正常日志有时候也会输出到 stderr
                console.log(`[blob-html stderr] ${output.trim()}`)
                checkStarted(output)
            })

            devServerProcess.on('error', (err) => {
                console.error('❌ [blob-html] 开发服务器进程错误:', err)
                if (!started) {
                    rejectPromise(err)
                }
            })

            devServerProcess.on('close', (code) => {
                console.log(`[blob-html] 进程退出，代码: ${code}`)
                if (!started) {
                    console.error('[blob-html] 输出缓冲:', outputBuffer)
                    rejectPromise(new Error(`Dev server exited with code ${code}`))
                }
                devServerProcess = null
            })

            // 超时处理 - 8秒后如果还没启动成功，假设已启动
            setTimeout(() => {
                if (!started) {
                    started = true
                    console.log(`⚠️ [blob-html] 超时，假设开发服务器已启动: http://localhost:${devPort}`)
                    resolvePromise(`http://localhost:${devPort}`)
                }
            }, 8000)
        })
    }

    const tryReadCachedHtml = (): string | null => {
        const htmlPath = join(distPath, 'index.html')
        if (existsSync(htmlPath)) {
            let html = readFileSync(htmlPath, 'utf-8')
            // 去掉 \r (Windows 换行符)
            html = html.replace(/\r/g, '')
            return html
        }
        return null
    }

    return {
        name: 'vite-plugin-blob-html',

        configResolved(resolvedConfig) {
            config = resolvedConfig
            blobHtmlPath = resolve(config.root, blobHtmlDir)
            distPath = join(blobHtmlPath, 'dist')
            isDevMode = config.command === 'serve'
        },

        async buildStart() {
            if (isDevMode) {
                // 开发模式：启动 blob-html 的 dev server
                try {
                    await startDevServer()
                } catch (e) {
                    console.error('❌ [blob-html] 开发服务器启动失败，将尝试使用构建后的文件')
                    // 降级到构建模式
                    try {
                        await buildBlobHtml()
                    } catch {
                        cachedHtml = tryReadCachedHtml()
                        if (!cachedHtml) {
                            console.warn('⚠️ [blob-html] 无法启动开发服务器，也没有缓存文件')
                        }
                    }
                }
            } else {
                // 构建模式：构建 blob-html
                try {
                    await buildBlobHtml()
                } catch (e) {
                    cachedHtml = tryReadCachedHtml()
                    if (!cachedHtml) {
                        throw new Error(
                            '[blob-html] 构建失败且没有缓存的 HTML 文件可用。请先手动运行 cd blob-html && pnpm build',
                        )
                    }
                    console.warn('⚠️ [blob-html] 使用缓存的 HTML 文件')
                }
            }
        },

        configureServer(server) {
            // 添加 API 端点：写入 data.json
            server.middlewares.use('/api/blob-html/data', (req, res) => {
                if (req.method === 'POST') {
                    let body = ''
                    req.on('data', (chunk) => {
                        body += chunk.toString()
                    })
                    req.on('end', () => {
                        try {
                            const data = JSON.parse(body)
                            const dataJsonPath = join(blobHtmlPath, 'src', 'assets', 'data.json')

                            // 确保目录存在
                            const dir = dirname(dataJsonPath)
                            if (!existsSync(dir)) {
                                mkdirSync(dir, { recursive: true })
                            }

                            // 写入文件
                            writeFileSync(dataJsonPath, JSON.stringify(data, null, 2), 'utf-8')
                            console.log('✅ [blob-html] 已更新 data.json')

                            res.writeHead(200, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ success: true }))
                        } catch (e) {
                            console.error('❌ [blob-html] 写入 data.json 失败:', e)
                            res.writeHead(500, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ success: false, error: String(e) }))
                        }
                    })
                } else {
                    res.writeHead(405, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: 'Method not allowed' }))
                }
            })
        },

        closeBundle() {
            // 关闭开发服务器
            if (devServerProcess) {
                console.log('\n🛑 [blob-html] 关闭开发服务器...')
                devServerProcess.kill()
                devServerProcess = null
            }
        },

        resolveId(id) {
            if (id === VIRTUAL_MODULE_ID) {
                return RESOLVED_VIRTUAL_MODULE_ID
            }
        },

        load(id) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                if (isDevMode) {
                    // 开发模式：返回 dev server URL
                    const devUrl = `http://localhost:${devPort}`
                    return `
                        export const isDev = true;
                        export const devUrl = ${JSON.stringify(devUrl)};
                        export default ${JSON.stringify(devUrl)};
                    `
                } else {
                    // 构建模式：返回 HTML 内容
                    if (!cachedHtml) {
                        cachedHtml = tryReadCachedHtml()
                    }

                    if (!cachedHtml) {
                        throw new Error('[blob-html] HTML 内容不可用，请确保 blob-html 已构建')
                    }

                    return `
                        export const isDev = false;
                        export const devUrl = null;
                        export default ${JSON.stringify(cachedHtml)};
                    `
                }
            }
        },
    }
}

export default blobHtmlPlugin
