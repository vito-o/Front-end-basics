const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  publicPath: "/",
  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('#', resolve(__dirname, 'types'))
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV_NAME': JSON.stringify(process.env.NODE_ENV_NAME)
      })
    ]
  }
}