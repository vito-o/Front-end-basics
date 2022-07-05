
//异步编译插件
module.exports = class HelloAsyncPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'hello async plugin', 
      (compilation, callback) => {
        setTimeout(() => {
          console.log('异步任务完成！')
          callback();
        }, 1000)
      }
    );

    compiler.hooks.emit.tapPromise(
      'hello async plugin',
      (compilation) => {
        return new Promise((resolve, rejects) => {
          setTimeout(() => {
            console.log('异步任务完成！~~~')
            resolve(true)
          }, 1000)
        })
      }
    )
  }
}