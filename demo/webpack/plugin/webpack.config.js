// const Plugin1 = require('./plugins/Plugin1')
// const Plugin2 = require('./plugins/Plugin2')
const CopyWebpackPlugin = require('./plugins/CopyWebpackPlugin')

module.exports = {
  mode: 'development',
  plugins: [
    // new Plugin1()
    // new Plugin2(),
    new CopyWebpackPlugin({
      from: 'public',
      to: 'css',
      ignore: ['**/index.html']
    })
  ]
}