import { def } from './utils'
import defineReactive from './defineReactive';
import { arrayMethods } from './array'
import { observe } from './observe';
import Dep from './Dep';

class Observer {
  constructor(value) {
    this.dep = new Dep();
    //构造函数中的this表示的是，实例的值，而不是类本身
    def(value, '__ob__', this, false);

    if(Array.isArray(value)) {
      //如果是数组，将数组的原型指向这个替换的方法
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(value) {
    for(let key in value){
      defineReactive(value, key);
    }
  }

  observeArray(array) {
    for(let i = 0, len = array.length; i < len; i++) {
      if(typeof array[i] == 'object') {
        observe(array[i]);
      }
    }
  }
}

export default Observer;