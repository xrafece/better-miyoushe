import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { resolve } from 'path'

import cdn from 'vite-plugin-cdn-import'
import { viteSingleFile } from 'vite-plugin-singlefile'

// 开发模式下提供 mock 接口，返回 data.json 内容
function mockDataPlugin(): Plugin {
    return {
        name: 'mock-data-plugin',
        configureServer(server) {
            server.middlewares.use('/api/character-list', (_req, res) => {
                try {
                    const dataPath = resolve(__dirname, 'src/assets/data.json')
                    const data = readFileSync(dataPath, 'utf-8')
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(data)
                } catch (e) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end('[]')
                }
            })
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        mockDataPlugin(),
        vue(),
        cdn({
            modules: ['vue', 'lodash'],
        }),
        viteSingleFile(),
    ],
})
