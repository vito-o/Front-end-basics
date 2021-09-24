const fs = require('fs')

//最好将当前进程号写进文件锁中
//当有异常的时候就知道最后这个锁的进程
fs.writeFile('config.lock', process.pid, { flogs: 'wx' }, err => {
  if(err) {
    return console.error(err, 'lock-1')
  }
})