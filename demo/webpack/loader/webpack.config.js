const { resolve } = require('path')

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        /* use: [
          'loader1',
          'loader2',
          {
            loader: 'loader3',
            options: {
              name: 'zhangsan',
              age: 18
            }
          }
        ] */
        loader: 'babelLoader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  //配置loader解析规则
  resolveLoader: {
    modules: [
      'node_modules',
      resolve(__dirname, 'loaders')
    ]
  }
}