const fs = require('fs')
const path = require('path')
const globby = require('globby')
const util = require('util')
const webpack = require('webpack')

const schema = require('./schema.json')
const { validate } = require('schema-utils')
const { RawSource } = webpack.sources;

const readFile = util.promisify(fs.readFile);


class CopyWebpackPlugin {
  constructor(options) {
    validate(schema, options, {
      name: 'CopyWebpackPlugin'
    })
    this.options = options;
  }

  apply(compiler) {
    //初始化compilation
    compiler.hooks.thisCompilation.tap('thisCompilation', (compilation) => {
      //添加资源 hooks
      compilation.hooks.additionalAssets.tapAsync('additionalAssets', async cb => {
        //将from中的资源复制到to中去
        const { from, ignore } = this.options;
        const to = this.options.to || '.'

        const context = compiler.options.context;
        let absoluteFrom = path.isAbsolute(from) ? from : path.resolve(context, from);
        absoluteFrom = absoluteFrom.replace(/\\/g, '\/')
        const paths = await globby(absoluteFrom, {ignore})

        //读取文件
        const files = await Promise.all(
          paths.map(async absolutePath => {
            let data = await readFile(absolutePath)
            let relativePath = path.basename(absolutePath)

            let filename = path.join(to, relativePath);
            return {
              data,
              filename
            }
          })
        )

        //生成webpack格式的资源
        const assets = files.map(file => {
          let source = new RawSource(file.data)
          return {
            source,
            filename: file.filename
          }
        })

        //添加compilation中输出出去
        assets.forEach(asset => {
          compilation.emitAsset(asset.filename, asset.source)
        })

        cb();

      })
    })
  }
}

module.exports = CopyWebpackPlugin;