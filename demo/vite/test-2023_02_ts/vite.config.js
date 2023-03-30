import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({command, mode}) => {
  return {
    build: {
      minify: false,
      rollupOptions: {
        manualChunks: (id) => {
          console.log(id)
          if(id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    plugins: [
      checker({
        typescript: true,
      }),
      viteCompression()
    ]
  }
})