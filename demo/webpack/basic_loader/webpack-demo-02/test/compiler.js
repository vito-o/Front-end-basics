const path = require('path')
const webpack = require('webpack')
const { createFsFromVolume, Volume } = require('memfs');

module.exports = (fixture, options = {}) => {
    const compiler = webpack({
        context: __dirname,
        entry: `./${fixture}`,
        output: {
            path: path.resolve(__dirname),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.txt$/,
                    use: {
                        loader: path.resolve(__dirname, '../src/loader.js'),
                        options
                    }
                }
            ]
        }
    });

    compiler.outputFileSystem = createFsFromVolume(new Volume());
    compiler.outputFileSystem.join = path.join.bind(path);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if(err) reject(err)
            if (stats.hasErrors()) reject(stats.toJson().errors);

            resolve(stats);
        })
    })
}