#! /usr/bin/env node

// #! 符号的名字叫shebang,用于指定脚本的解释程序

console.log('my-node-cli working~')


const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Your name',
    default: 'my-node-cli'
  }
]).then(answers => {
  //模板文件目录
  const destUrl = path.join(__dirname, 'templates')

  //生成文件目录
  //process.cwd() 对应控制台所在目录
  const cwdUrl = process.cwd()

  //从模板目录中读取文件
  fs.readdir(destUrl, (err, files) => {
    if(err) throw err;

    files.forEach(file => {
      //使用ejs渲染对应的模板文件
      //readerFile(模板文件地址，传入渲染shuju )
      ejs.renderFile(path.join(destUrl, file), answers).then(data => {
        //生成ejs处理后的模板文件
        console.log(file)
        fs.writeFileSync(path.join(cwdUrl, file), data)
      })
    })
  })

  console.log(answers)
})