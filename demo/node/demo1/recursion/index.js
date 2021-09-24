const fs = require('fs')
const join = require('path').join;

//同步查找
exports.findSync = function(nameRe, startPath) {
  const result = [];

  function finder(path) {
    const files = fs.readdirSync(path)

    for(let i = 0; i < files.length; i++) {
      const fpath = join(path, files[i]);
      const stats = fs.statSync(fpath);

      if(stats.isDirectory()) {
        finder(fpath)
      }

      if(stats.isFile() && nameRe.test(files[i])) {
        result.push(fpath)
      }
    }
  }

  finder(startPath);
  return result;
}

//异步查找
exports.find = function(nameRe, startPath, cb) {
  const results = []
  let asyncOps = 0;

  function finder(path) {
    asyncOps++;

    fs.readdir(path, function(er, files) {
      if(er) { return cb(er) }
  
      files.forEach(function(file) {
        const fpath = join(path, file)
  
        asyncOps++;
        fs.stat(fpath, function(er, stats) {
          if(er) { return cb(er) }
  
          if(stats.isDirectory()) finder(fpath);
  
          if(stats.isFile() && nameRe.test(file)) {
            results.push(fpath)
          }
          asyncOps--;
          if(asyncOps == 0) {
            cb(null, results)
          }
        })
      })
      asyncOps--;
      if(asyncOps == 0) {
        cb(null, results)
      }
    })
  }
  finder(startPath);
}


// console.log(exports.findSync(/file.*/, `${__dirname}/dir-a`));
console.log(exports.find(/file.*/, `${__dirname}/dir-a`, console.log));