import { defineConfig, loadEnv } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
import viteExampleConfig from './vite.example.config'

// 策略模式
const envResolver = {
  //代表生产环境的配置
  "build": () => Object.assign(viteBaseConfig, viteProdConfig, viteExampleConfig),
  //代表开发环境的配置
  "serve": () => Object.assign(viteBaseConfig, viteDevConfig, viteExampleConfig)
}

export default defineConfig(({command, mode}) => {
  // console.log(command, 'comm')
  let env = loadEnv(mode, process.cwd(), '')
  // console.log(env, 'env')

  return envResolver[command]();
})


//如果是客户端，vite会将对应的环境变量注入到import.meta.env里去