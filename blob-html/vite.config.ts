import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import cdn from 'vite-plugin-cdn-import'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cdn({
            modules: ['vue'],
        }),
        viteSingleFile(),
    ],
})
