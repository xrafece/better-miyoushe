import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'
import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'
import { blobHtmlPlugin } from './plugins/vite-plugin-blob-html'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // 自动构建 blob-html 并提供虚拟模块
        blobHtmlPlugin({
            blobHtmlDir: 'blob-html',
            watch: true,
        }),
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        tailwindcss(),
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'Better Miyoushe',
                version: '1.3.0',
                description: 'Make Miyoushe Great Again 美化米游社页面，让米游社再次伟大！！！',
                icon: 'https://img-static.mihoyo.com/favicon.ico',
                namespace: 'http://xrafece.com',
                author: 'Xrafece',
                match: [
                    'https://act.mihoyo.com/ys/event/calculator/*',
                    'https://act.mihoyo.com/ys/app/interactive-map/*',
                    'https://www.miyoushe.com/*',
                    'https://baike.mihoyo.com/ys/*',
                ],
            },
            build: {
                externalGlobals: {
                    vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
                    pinia: cdn.jsdelivr('Pinia', 'dist/pinia.iife.prod.js'),
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
