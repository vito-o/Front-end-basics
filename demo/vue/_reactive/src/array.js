import { def } from "./utils";
import Dep from "./Dep";

const arrayPrototype = Array.prototype;

export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsNeedChange.forEach(methodName => {
  //备份原来的方法
  const original = arrayPrototype[methodName];
  //定义新方法
  def(arrayMethods, methodName, function() {
    const result = original.apply(this, arguments);

    const dep = new Dep()

    const args = [...arguments];
    const ob = this.__ob__;

    let inserted = [];

    switch(methodName){
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if(inserted) {
      ob.observeArray(inserted)
    }

    dep.notify();  
    return result;  
  }, false)
})