import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig(({command, mode}) => {
  return {
    plugins: [
      checker({
        typescript: true,
      })
    ]
  }
})