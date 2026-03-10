import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = process.env.VITE_BASE_PATH || "/Portfolio-Website";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __BASE_PATH__: JSON.stringify(basePath)
    },
    base: basePath,
})
