const { resolve } = require('path')
const fs = require('fs')
const util = require('util')

const webapck = require('webpack')
const { RawSource } = webapck.sources

const readFile = util.promisify(fs.readFile);

class Plugin2 {
  apply(compiler) {

    compiler.hooks.thisCompilation.tap('emit', (compilation) => {
      console.log('emit ~')
      

      compilation.hooks.additionalAssets.tapAsync('add', async cb => {
        /* let content = 'hellow world'

        compilation.assets['a.txt'] = {
          size() {
            return content.length;
          },
          source() {
            return content;
          }
        } */

        let data = await readFile(resolve(__dirname, './c.txt'))

        // compilation.assets['c.txt'] = new RawSource(data)
        compilation.emitAsset('c.txt', new RawSource(data))

        cb();
      })

      //additionalAssets
    })

  }
}

module.exports = Plugin2;