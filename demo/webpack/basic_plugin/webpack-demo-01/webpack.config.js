const path = require('path');
const Demo = require('./plugin/demo-5.js')

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
    new Demo({
      outputFile: 'my-assets.md'
    })
  ]

}