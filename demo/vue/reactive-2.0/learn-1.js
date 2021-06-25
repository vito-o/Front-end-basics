/**
 * 数据劫持
 * 依赖收集
 * 派发更新
 */

function defineReactive(data, key, value = data[key]){
  const dep = new Dep();
  observe(value)

  Object.defineProperty(data, key, {
    get() {
      dep.depend();
      //dep.push(watcher)
      return value;
    },

    set(newVal) {
      if(newVal === value) return;
      value = newVal;
      observe(newVal);
      
      //dep.forEach(d => d.update())
      dep.notify();
    }
  })
}

function observe(data) {
  if(typeof data !== 'object'){
    return;
  }
  new Observer(data)
}

class Observer {
  constructor(value) {
    this.value = value;
    this.walk()
  }

  walk() {
    Object.keys(this.value).forEach(key => defineReactive(this.value, key))
  }
}


class Watcher {
  /**
   * @param {*} data 数据对象，如obj
   * @param {*} expression 表达式，如b.c，根据data和expression就可以获取watcher依赖的数据
   * @param {*} cb 依赖变化时触发的回调
   */
  constructor(data, expression, cb) {
    this.data = data;
    this.expression = expression;
    this.cb = cb;
    //初始化watcher实例时订阅数据
    this.value = this.get();
  }
  
  get() {
    pushTarget(this)
    //window.target = this;
    const value = parsePath(this.data, this.expression)
    popTarget()
    //window.target = null;
    return value;
  }

  //当收集到数据变化的消息时执行改方法，从而调用cb()
  update() {
    const oldValue = this.value;
    this.value = parsePath(this.data, this.expression);
    this.cb.call(this.data, this.value, oldValue)
  }
}

function parsePath(obj, expression) {
  const segments = expression.split('.')
  for(let key of segments) {
    if(!obj) return;
    obj = obj[key];
  }
  return obj;
}

class Dep {
  constructor() {
    this.subs = []
  }

  depend() {
    if(Dep.target) {
      this.addSub(Dep.target)
    }
  }

  notify() {
    const subs = [...this.subs]
    subs.forEach(s => s.update())
  }

  addSub(sub) {
    this.subs.push(sub)
  }
}

Dep.target = null;

const targetStack = []

function pushTarget(_target){
  targetStack.push(Dep.target)
  Dep.target = _target;
}

function popTarget(){
  Dep.target = targetStack.pop();
}

let obj = {
  a: 111,
  b: {
    c: {
      d: 4
    }
  }
}

observe(obj);

new Watcher(obj, 'b.c.d', (val, oVal) => {
  console.log(val, oVal)
})