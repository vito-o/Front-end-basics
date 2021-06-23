#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

program
  //定义命令和参数
  .command('create <app-name>')
  .description('create a new project')
  //-f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    //在create.js中执行创建命令
    require('../lib/create.js')(name, options)
  })

program
  //配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program
  //配置config命令
  .command('config [value]')
  .description('inspect and modify the config')
  .option('-g, --get <path>', 'get value from option')
  .option('-s, --set <path> <value>')
  .option('-g, --delete <path>', 'delete option from config')
  .action((value, options) => {
    console.log(value, options)
  })

program
  //配置ui命令
  .command('ui')
  .description('start add open roc-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    console.log(option)
  })

program
  //监听 --help 执行
  .on('--help', () => {
    //使用figlet绘制Logo
    console.log(`\r\n` + figlet.textSync('zhurong', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }))

    console.log(`\r\nRun ${chalk.cyan(`zr <command> --help`)} for detailed usage of given command\r\n`);
  })

//解析用户执行命令传入参数
program.parse(process.argv)