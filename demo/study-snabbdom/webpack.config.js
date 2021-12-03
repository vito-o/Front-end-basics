const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    compress: false,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
      //contentBase: path.join(__dirname, 'public'),
      //publicPath: '/'
    }
  }
};