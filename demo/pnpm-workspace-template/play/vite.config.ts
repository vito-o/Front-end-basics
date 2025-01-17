import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@cursor\/(.*)/,
        replacement: resolve(__dirname, '../packages/$1')
      }
    ]
  },
  optimizeDeps: {
    include: ['vue']
  }
}) 