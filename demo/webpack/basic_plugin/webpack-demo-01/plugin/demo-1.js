module.exports = class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      "hello world plugin",
      stats => {
        console.log(stats)
        console.log('Hello world!')
      }
    )
  }
}