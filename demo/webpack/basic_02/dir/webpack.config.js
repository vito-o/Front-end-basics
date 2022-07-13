const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'static/js/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/img/[hash][ext][query]'
                }
            }
        ]
    }
}