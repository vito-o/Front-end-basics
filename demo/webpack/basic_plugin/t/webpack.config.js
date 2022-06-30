const path = require('path');
const Demo = require('./demo-1.js')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: "[name].js",
    path:path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Demo()
  ]

}