#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const spawn = require('cross-spawn')

program
  .version('0.1.0')
  .command('create <name>')
  .description('create a new project')
  .action(name => {
    //console.log('project name is ' + name)

    //文本样式
    console.log('project name is ' + chalk.bold(name))

    //颜色
    console.log('project name is ' + chalk.cyan(name))
    console.log('project name is ' + chalk.green(name))
    
    //背景色
    console.log('project name is ' + chalk.bgRed(name))

    //使用RGB颜色输出
    console.log('project name is ' + chalk.rgb(4, 156, 219).underline(name))
    console.log('project name is ' + chalk.hex('#049CDB').bold(name))
    console.log('project name is ' + chalk.bgHex('#049CDB').bold(name))

    // testOra()

    testSpawn()
  })

program.parse();


function testOra(){
  const message = 'Loading unicorns'

  //初始化
  const spinner = ora(message)
  //开始加载动画
  spinner.start()

  setTimeout(() => {
    spinner.color = 'red'
    spinner.text = 'Loading rainbows';

    setTimeout(() => {
      //加载状态修复
      spinner.stop();
      spinner.succeed('Loading succeed')
    }, 2000)
  }, 2000)
}


function testSpawn(){
  //定义需要安装的依赖
  const dependencies = ['vue', 'vuex', 'vue-router'];

  //执行安装
  const child = spawn('npm', ['install', '-D'].concat(dependencies), {
    stdio: 'inherit'
  })

  //执行监听
  child.on('close', function(code){
    //执行失败
    if(code != 0) {
      console.log(chalk.red('Error occurred while installing dependencies!'))
      process.exit(1)
    }
    //执行成功
    else {
      console.log(chalk.cyan('Install finished'))
    }
  })
}