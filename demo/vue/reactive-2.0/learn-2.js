function defineReactive(obj, key, val){
  let childOb = observe(val)

  Object.defineProperty(obj, key, {
    get() {
      console.log('get: ', val)
      return val;
    },
    set(newVal){
      if(val === newVal) return;
      val = newVal;
      childOb = observe(newVal)
      dep.notify()
    }
  })
}

const arr = [1, 2, 3]

arr.forEach((val, i, arr) => {
  defineReactive(arr, i, val)
})


class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();

    //在每个对象身上定义一个__ob__属性，指向每个对象的Observer实例
    def(value, '__ob__', this)

    if(Array.isArray(value)) {
      Object.setPrototypeOf(value, proxyPrototype)
      this.observeArray(value)
    } else {
      this.walk()
    }
  }

  walk() { }

  //需要监听数组内的元素，如果数组元素是对象的话
  observeArray(arr) {
    arr.forEach(i => observe(i))
  }
}

//工具函数def，就是对Object.defineProperty的封装
function def(obj, key, value, enumerable = false) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}

const arrayPrototype = Array.prototype

const reactiveMethods = [
  'push',
  'pop',
  'unshift',
  'shift',
  'splice',
  'reverse',
  'sort'
]

//增加代理原型proxyPrototype.__proto__ === arrayPrototype
const proxyPrototype = object.create(arrayPrototype)

reactiveMethods.forEach(method => {
  const originalMethod = arrayPrototype[method]

  Object.defineProperty(proxyPrototype, method, {
    value(...args) {
      const result = originalMethod.apply(this, args)
      const ob = this.__ob__;

      //对push，unshift，splice的特殊处理
      let inserted = null;
      switch(method){
        case 'push':
        case 'unshift':
          inserted = args
          break;
        case 'splice':
          //splice第三个及以后的元素是新增元素
          inserted = args.slice(2)
      }
      if(inserted){
        ob.observeArray(inserted)
      }

      ob.dep.notify()
      return result;
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
})

function observe(value) {
  if(typeof value !== 'object') return;

  let ob;

  if(value.__ob__ && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }

  return ob;
}