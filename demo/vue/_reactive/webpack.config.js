const { resolve } = require('path')

module.exports = {
  mode: 'development',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  devServer: {
    port: 9999,
    static: {
      directory: resolve(__dirname, '.'),
    },
  }
}