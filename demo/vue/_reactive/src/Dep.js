var uid = 0;
export default class Dep {
  constructor() {
    this.id = uid++;
    //subs  英文 subscribes 订阅者的意思
    this.subs = []
  }
  //添加订阅
  addSubs(sub) {
    this.subs.push(sub)
  }
  //添加依赖
  depend() {
    //Dep.target是自己指定的全局唯一的变量，改为window.target也是可以的
    if(Dep.target) {
      this.addSubs(Dep.target)
    }
  }

  //通知更新
  notify() {
    const subs = this.subs.slice()

    for(let i = 0, len = subs.length; i < len; i++) {
      subs[i].update();
    }

    console.log('我是notify')
  }
}