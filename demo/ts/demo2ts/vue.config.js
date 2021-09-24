const webpack = require('webpack')

module.exports = {
  publicPath: "/",
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV_NAME': JSON.stringify(process.env.NODE_ENV_NAME)
      })
    ]
  }
}