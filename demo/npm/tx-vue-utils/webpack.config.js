const path = require('path')

module.exports = {
  mode: 'production',
  // mode: 'development',

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: "utils",
    libraryTarget: "umd",
    // libraryExport: 'default',
    filename: 'tx-vue-utils.js',
    umdNamedDefine: true,
    clean: true,
  },
  module: {

  }


}