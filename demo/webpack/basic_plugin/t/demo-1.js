//一个js类
class myExampleWebpackPlugin {
  //在在插件函数的prototype 上定义一个apply方法，以compiler为参数
  apply(compiler) {
    //指定一个挂载到webpack自身的事件钩子
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('这是一个示例插件！');
        console.log(
          '这里表示了资源的单次构建的 `compilation` 对象：'
        );

        //用webpack提供的插件api处理构建过程
        // compilation.addModule()

        callback();
      }
    )
  }
}

module.exports = myExampleWebpackPlugin