const path = require('path')

module.exports = env => {
  console.log('Goal: ', env.goal)
  console.log('Production: ', env.production)

  return {
    // mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]-bundle.js',
    }
  }
}