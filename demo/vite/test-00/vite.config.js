/* export default {
  optimizeDeps: {
    // exclude: ['lodash-es']  //当遇到lodash-es这个依赖时，不进行依赖预构建
  }
} */

import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  "build": () => Object.assign(viteBaseConfig, viteProdConfig),
  "serve": () => Object.assign(viteBaseConfig, viteDevConfig),
}

//: "build" || "serve"
export default defineConfig(({command}) => {
  return envResolver[command]()
})