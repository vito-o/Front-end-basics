const path = require('path')
const fs = require('fs')

const DEFAULT_ALIAS = '@'
const DEFAULT_DIR_PATH = './src'

let aliasJson = {}

function getFileAndDir(parentAlias, parentDir) {
  let cPath = path.resolve(process.cwd(), parentDir);

  let files = fs.readdirSync(cPath);
  if(!files.length) return;

  files.forEach(filename => {
    let stat = fs.statSync(path.join(cPath, filename))
    if(!stat) return;

    let isDir = stat.isDirectory()
    if(isDir) {
      getFileAndDir(`${parentAlias}${filename}`, `${parentDir}/${filename}`)
    }
  })

  aliasJson[parentAlias] = parentDir
}


const viteAliasesPlugin = () => ({
  name: 'self-vite-aliases',
  config: (config, {command}) => {
    
    getFileAndDir(DEFAULT_ALIAS, DEFAULT_DIR_PATH);

    return {
      resolve: {
        alias: {
          ...aliasJson
        }
      }
    };
  }
});


module.exports = {
  viteAliasesPlugin
}