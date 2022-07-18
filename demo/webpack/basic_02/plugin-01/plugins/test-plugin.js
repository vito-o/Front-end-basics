
/**
 * 1.webpack加载webpack.config.js中的所有配置，此时就会new TestPlugin()，执行插件的constructor
 * 2.webpack创建compiler对象
 * 3.遍历所有的plugins中的插件，执行apply方法
 * 4.执行剩下的编译流程（触发各个hooks事件）
 */
class TestPlugin {
    constructor() {
        console.log('TestPlugin constructor')
    }

    apply(compiler) {
        debugger
        console.log('TestPlugin apply')

        compiler.hooks.environment.tap('TestPlugin', () => {
            console.log('TestPlugin environment')
        })

        //异步串行钩子
        compiler.hooks.emit.tap('TestPlugin', compilation => {
            console.log('TestPlugin emit 111')
        })

        compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
            setTimeout(() => {
                console.log('TestPlugin emit 222')
                callback();
            }, 1000)
        })

        compiler.hooks.emit.tapPromise('TestPlugin', compilation => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('TestPlugin emit 333')
                    resolve();
                }, 1000)
            })
        })

        //异步并行钩子
        compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
            compilation.hooks.seal.tap('TestPlugin', () => {
                console.log('TestPlugin seal')
            })


            setTimeout(() => {
                console.log('TestPlugin make 111')
                callback();
            }, 3000)
        })
        //异步并行钩子
        compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
            setTimeout(() => {
                console.log('TestPlugin make 222')
                callback();
            }, 1000)
        })
        //异步并行钩子
        compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
            setTimeout(() => {
                console.log('TestPlugin make 333')
                callback();
            }, 2000)
        })
    }
}

module.exports = TestPlugin;