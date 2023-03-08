import { defineConfig } from 'vite'
// const postcssPresetEnv = require('postcss-preset-env');
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  optimizeDeps: {
    exclude: [], //将指定数组中的依赖不进行依赖构建
  },
  envPrefix: "ENV_", //配置vite注入客户端环境变量校验的env前缀
  css: {  //对css的行为进行配置
    modules: {
      // localsConvention: 'camelCase'
      // scopeBehaviour: 'local'
      // hashPrefix: 'ccc_'
      // globalModulePaths: ['./css/componentA.module.css'], //不想参与css模块化的路径
    },
    preprocessorOptions: {
      less: {
        math: 'always', //计算
        globalVars: {
          mainColor: 'red'
        },
      }
    },
    devSourcemap: true,
    postcss: {
      // plugins: [ postcssPresetEnv() ]
    }
  },
  build: {
    rollupOptions: { //配置rollup的构建策略
      output: {//控制输出
        assetFileNames: "[hash].[name].[ext]"
      }
    },
    assetsInlineLimit: 4096,
    outDir: 'vite-dist',  //打包输出目录名称
    assetsDir: 'static',  //静态资源目录名称
  },
  plugins: [
    ViteAliases()
  ]
  
})