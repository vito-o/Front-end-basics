const { getRepoList, getTagList } = require('./http')
const ora = require('ora')
const inquirer = require('inquirer')
const util = require('util')
const downloadGitRepo = require('download-git-repo')
const path = require('path')
const chalk = require('chalk')

//添加加载动画
async function wrapLoading(fn, message, ...args) {
  //使用ora初始化，传入提示信息 message
  const spinner = ora(message);
  //开始加载动画
  spinner.start();

  try{
    //执行传入方法 fn
    const result = await fn(...args)
    //状态修改为成功
    spinner.succeed()
    return result;
    
  } catch (error) {
    //状态修改为失败
    spinner.fail('Request failed, refeth ...')
  }

}

class Generator {
  constructor(name, targetDir) {
    //目录名称
    this.name = name;
    //创建位置
    this.targetDir = targetDir;

    //对download-git-repo进行promise化改造
    this.downloadGitRepo = util.promisify(downloadGitRepo)

  }

  //远程下载模板
  //1 拼接下载地址
  //2 调用下载方法
  async download(repo, tag) {
    //拼接下载地址
    const requestUrl = `zhurong-cli/${repo}${tag?'#'+tag:''}`

    //调用下载方法
    await wrapLoading(
      this.downloadGitRepo,
      'waiting download template',
      requestUrl,
      path.resolve(process.cwd(), this.targetDir) //参数2 创建位置
    )

  }


  //获取用户选择的模板
  //1从远程拉取模板数据
  //2用户选择自己新下载的模板名称
  //3return用户选择的名称

  async getRepo() {
    //1 从远端拉取模板数据
    const repoList = await wrapLoading(getRepoList, 'waiting fetch template')

    if(!repoList) return;

    //过滤我们需要的模板名称
    const repos = repoList.map(item => item.name)

    //2 用户选择自己新下载的模板名称
    const { repo } = await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos,
      message: 'Please choose a template to create project'
    })

    return repo;
  }

  //获取用户选择的版本
  //1 基于repo结果，远程拉取对应tag列表
  //2 用户选择自己需要下载的tag
  //3 return用户选择的tag
  async getTag(repo){
    //基于repo结果，远程拉取对应tag列表
    const tags = await wrapLoading(getTagList, 'waiting fetch tag', repo);
    if(!tags) return;

    //过滤我们需要的名称
    const tagsList = tags.map(item => item.name)

    //用户选择自己需要下载的tag
    const { tag } = await inquirer.prompt({
      name: 'tag',
      type: 'list',
      choices: tagsList,
      message: 'Please choose a tag to create project'
    })

    return tag;
  }

  //核心创建逻辑
  //1 获取模板名称
  //2 获取tag名称
  //3 下载模板到模板目录
  //4 模板使用提示
  async create() {
    const repo = await this.getRepo();

    const tag = await this.getTag(repo)

    await this.download(repo, tag)

    //4 模板使用提示
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`)
    console.log(`\r\n cd ${chalk.cyan(this.name)}`)
    console.log('  npm run dev\r\n')

    console.log('用户选择了，repo = ' + repo + ', tag = ' + tag)
  }
}

module.exports = Generator;