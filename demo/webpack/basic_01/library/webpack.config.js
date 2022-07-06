const path = require('path')

module.exports = {
  mode: 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist')
    library: 'es6-import',
    libraryTarget: 'umd',
    filename: 'es6-import.js',
  },
}