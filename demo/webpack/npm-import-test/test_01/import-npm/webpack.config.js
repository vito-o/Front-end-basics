const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    clean: true,
    // path: path.resolve(__dirname, 'dist'),
    filename: 'import-npm.js',
    library: {
        name: 'import-npm',
        type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["add-module-exports"]
          }
        }
      }
    ]
  }
}