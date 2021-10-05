class Plugin1 {
  apply(complier) {
    complier.hooks.emit.tap('emit', (compilation) => {
      console.log('emit tap')
    })

    complier.hooks.emit.tapAsync('emit tap async', (compilation, cb) => {
      setTimeout(() => {
        console.log('emit tap async')
        cb()
      }, 1000)
    })

    complier.hooks.emit.tapPromise('emit tap promise', (compilation) => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('emit tap promise')
          resolve()
        }, 1000)
      })
    })

    complier.hooks.afterEmit.tap('afterEmit', (compilation) => {
      console.log('afterEmit tap')
    })

    complier.hooks.done.tap('done', (stats) => {
      console.log('done tap')
    })
  }
}

module.exports = Plugin1;