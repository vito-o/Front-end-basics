//vue响应式原理
function defineReactive(data, key, value = data[key]){
  let def = new Dep();
  observe(value);

  Object.defineProperty(data, key, {
    get() {
      def.depend();
      return value;
    },
    set(newVal) {
      if(newVal == value) return;
      value = newVal;
      def.notify()
    }
  })
}

class Observer {
  constructor(data) {
    this.data = data;
    this.walk();
  }

  walk() {
    Object.keys(this.data).forEach(key => defineReactive(this.data, key))
  }
}

function observe(data){
  if(typeof data !== 'object') {
    return;
  }
  new Observer(data)
}

class Dep {
  constructor() {
    this.subs = []
  }

  depend() {
    if(Dep.target) {
      this.subs.push(Dep.target)
    }
  }

  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}

Dep.target = null;

const targetStack = []

function pushTarget(target){
  targetStack.push(Dep.target)
  Dep.target = target;
}

function popTarget(){
  Dep.target = targetStack.pop();
}

class Watcher {
  constructor(data, expression, cb) {
    this.data = data;
    this.expression = expression;
    this.cb = cb;

    this.value = this.get();
  }

  get() {
    pushTarget(this)
    let value = getExpress(this.data, this.expression)
    popTarget()
    return value;
  }

  update() {
    let oldVal = getExpress(this.data, this.expression)
    let value = this.value;
    this.cb(value, oldVal)
  }
}

function getExpress(data, expression) {
  if(!expression) return data;

  let arr = expression.split('.')
  for(let key of arr){
    if(!data) return data;
    data = data[key];
  }
  return data;
}


let o = {
  a: 1,
  b: {
    c: {
      d: 2
    }
  }
}

observe(o)

new Watcher(o, 'b.c.d', (val, oldVal) => {
  console.log(val, oldVal)
})