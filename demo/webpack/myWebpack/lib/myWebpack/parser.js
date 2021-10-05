const path = require('path')
const fs = require('fs')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');

const parser = {
  getAst(filePath) {
    const file = fs.readFileSync(filePath, 'utf-8')
    //将其解析成ast抽象语法树
    const ast = babelParser.parse(file, {
      sourceType: 'module'    //解析文件的模块化方案是ES Module
    })

    return ast;
  },
  getDeps(filePath, ast) {
    //获取文件的文件夹路径
    const dirname = path.dirname(filePath)
    //定义存储依赖关系的容器
    const deps = {}

    traverse(ast, {
      //内部会遍历ast中program.body，判断里面的语句类型
      //如果type:ImportDeclaration就会触发当前函数
      ImportDeclaration({node}) {
        //获取相对路径
        const relativePath = node.source.value;
        //生成基于入口文件的绝对路径
        const absolutePath = path.resolve(dirname, relativePath)
        //添加依赖
        deps[relativePath] = absolutePath;
      }
    })
    return deps;
  },
  getCode(ast) {
    //编译代码，将浏览器中不能识别的语法进行编译
    const { code } = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })

    return code;
  }
}

module.exports = parser;