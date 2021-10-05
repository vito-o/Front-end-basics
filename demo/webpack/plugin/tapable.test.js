const { SyncHook, SyncBailHook, AsyncParallelHook } = require('tapable')

class Lesson {
  constructor() {
    //初始化hooks容器
    this.hooks = {
      // go: new SyncHook(['address'])
      //go: new SyncBailHook(['address']), //一旦有返回值就退出
      leave: new AsyncParallelHook(['name', 'age'])
    }
  }

  tap() {
    //向hooks容器中注册事件/添加回调函数
    /* this.hooks.go.tap('class0318', address => {
      console.log('class0318', address)
      return 123;
    })
    this.hooks.go.tap('12', address => {
      console.log('12', address)
    }) */

    this.hooks.leave.tapAsync('leave1', (name, age, cb) => {
      setTimeout(() => {
        console.log('leave1', name, age, cb)
        cb()
      }, 2000)
    })

    this.hooks.leave.tapPromise('leave2', (name, age) => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('leave2', name, age)
          resolve()
        }, 1000)
      })
    })
  }

  start() {
    //触发hooks
    // this.hooks.go.call('c318~~')

    this.hooks.leave.callAsync('zhangsan', 18, function() {
      console.log('end~~')
    });
  }
}

let l = new Lesson()
l.tap()
l.start()