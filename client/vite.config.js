import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // 👇 Correct handling for React Router in Vite
    build: {
        rollupOptions: {
            input: './index.html',
        },
    },
    server: {
        // 👇 This ensures routing works on browser refresh
        historyApiFallback: true, // ❌ won't work in Vite, remove this
    }
});
