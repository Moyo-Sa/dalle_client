import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "https://dalle-server-yq30.onrender.com",
        changeOrigin: true,
      },
    },
  }
})
