//Compiler 和 Compilation
module.exports = class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('helloCompilationPlugin', compilation => {

      compilation.hooks.optimize.tap('helloCompilationPlugin', () => {
        console.log('资源优化完毕！')
      })

    })
  }
}