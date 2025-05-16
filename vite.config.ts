import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'
import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
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
                version: '1.1.1',
                description: 'Make Miyoushe Great Again 美化米游社页面，让米游社再次伟大！！！',
                icon: 'https://img-static.mihoyo.com/favicon.ico',
                namespace: 'http://xrafece.com',
                author: 'Xrafece',
                match: [
                    'https://act.mihoyo.com/ys/*',
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
