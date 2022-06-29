const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: "[name].js",
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'loader3',
              options: {
                // test: 'hello  webpack ...'
                test: 'hello  webpack ...'
              }
            }
          ]
        }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],

  }
}