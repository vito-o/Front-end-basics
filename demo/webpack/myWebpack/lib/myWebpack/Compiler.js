const path = require('path')
const fs = require('fs')
const { getAst, getDeps, getCode } = require('./parser')

class Compiler {
  constructor(options = {}) {
    this.options = options;
    //所有依赖
    this.modules = []
  }

  run() {
    //读取入口文件内容
    const filePath = this.options.entry;
    
    const fileInfo = this.build(filePath);
    this.modules.push(fileInfo);

    this.modules.forEach(fileInfo => {
      const deps = fileInfo.deps;
      for(let relativePath in deps) {
        let absolutePath = deps[relativePath];
        let fileInfo = this.build(absolutePath)
        this.modules.push(fileInfo);
      }
    })
    //优化依赖关系图
    const depsGraph = this.modules.reduce((graph, module) => {
      return {
        ...graph,
        [module.filePath]: {
          code: module.code,
          deps: module.deps
        }
      }
    }, {})
    // console.log(depsGraph)
    this.generate(depsGraph)
  } 

  //执行代码
  generate(depsGraph){
    /*
      '"use strict";\n' +
      '\n' +
      'var _add = _interopRequireDefault(require("./add.js"));\n' +
      '\n' +
      'var _count = _interopRequireDefault(require("./count.js"));\n' +
      '\n' +
      'function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n' +      
      '\n' +
      'console.log((0, _add["default"])(1, 2));\n' +
      'console.log((0, _count["default"])(3, 4));'
    */

    let bundle = `
      (function(depsGraph){

        //加载入口文件
        function require(module) {
          //定义模块内部的require函数
          function localRequire(relativePath) {
            return require(depsGraph[module].deps[relativePath])
          }
          //定义暴露对象（将来我们模块要暴露的内容）
          var exports = {};

          (function(require, exports, code){
            eval(code);
          })(localRequire, exports, depsGraph[module].code);

          //作为require函数的返回值返回出去
          //后面的require函数能得到暴露的内容
          return exports;
        }

        require('${this.options.entry}');

      })(${JSON.stringify(depsGraph)});
    `;
    
    //生成文件的绝对路径
    const filePath = path.resolve(this.options.output.path, this.options.output.name)
    //写入文件
    fs.writeFileSync(filePath, bundle, 'utf-8')
  }

  //开始构建
  build(filePath) {
    //将文件解析成ast
    const ast = getAst(filePath);
    //获取ast中所有的依赖
    const deps = getDeps(filePath, ast);
    //将ast解析成code
    const code = getCode(ast);

    return {
      filePath,
      deps,
      code
    }
  }
}


module.exports = Compiler;