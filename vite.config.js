import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    root: path.join(__dirname, 'src'),
    build: {
    rollupOptions: {
      external: ['/src/main.jsx']
    }
  }
})
