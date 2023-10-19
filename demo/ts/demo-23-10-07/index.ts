/* 
function simpleDecorator(
  value:any,
  context:any
) {
  console.log(`hi, this is ${context.kind} ${context.name}`);
  return value;
}

@simpleDecorator
class A {} // "hi, this is class A" 
*/

import * as ts from "./node_modules/typescript/lib/typescript"



/* 
// 类装饰器一般用来对类进行操作，可以不返回任何值
function Greeter(value, context) {
  if (context.kind === 'class') {
    value.prototype.greet = function () {
      console.log('你好');
    };
  }
}

@Greeter
class User {}

let u = new User();
u['greet'](); // "你好" 
*/
/* 
// 类装饰器可以返回一个函数，替代当前类的构造方法
function countInstances(value:any, context:any) {
  let instanceCount = 0;

  const wrapper = function (...args:any[]) {
    instanceCount++;
    const instance = new value(...args);
    instance.count = instanceCount;
    return instance;
  } as unknown as typeof MyClass;

  wrapper.prototype = value.prototype; // A
  return wrapper;
}

@countInstances
class MyClass {}

const inst1 = new MyClass();
console.log(inst1 instanceof MyClass) // true
console.log(inst1['count']) // 1
 */

/* 
// 类装饰器也可以返回一个新的类，替代原来所装饰的类。
function countInstances(value:any, context:any) {
  let instanceCount = 0;

  return class extends value {
    constructor(...args:any[]) {
      super(...args);
      instanceCount++;
      this.count = instanceCount;
    }
  };
}

@countInstances
class MyClass {}

const inst1 = new MyClass();
console.log(inst1 instanceof MyClass) // true
console.log(inst1['count']) // 1
 */

/* 
// 通过类装饰器，禁止使用new命令新建类的实例
function functionCallable(value: any, context: any):any {
  if (context.kind === 'class') {
    return function (...args) {
      if (new.target !== undefined) {
        throw new TypeError('This function can’t be new-invoked');
      }
      return new value(...args);
    }
  }
}

@functionCallable
class Person {
  constructor(name) {
    this['name'] = name;
  }
}

// @ts-ignore
const robin = Person('Robin');
console.log(robin.name) // 'Robin'
 */

/* 
// 类装饰器的上下文对象context的addInitializer()方法，用来定义一个类的初始化函数，在类完全定义结束后执行
function customElement(name: string) {
  return <Input extends new (...args: any) => any>(
    value: Input,
    context: ClassDecoratorContext
  ) => {
    context.addInitializer(function () {
      customElements.define(name, value);
    });
  };
}

@customElement("hello-world")
class MyComponent {
  constructor() {
  }
  connectedCallback() {
    this['innerHTML'] = `<h1>Hello World</h1>`;
  }
} 
*/

/* 
// 如果方法装饰器返回一个新的函数，就会替代所装饰的原始函数。
function replaceMethod(value: any, context: any) {
  return function () { 
    return `How are you, ${this.name}?`
  }
}

class Person {
  name:string

  constructor(name) {
    this.name = name
  }

  @replaceMethod
  hello() {
    return `Hi ${this.name}!`;
  }
}

const robin = new Person('Robin');
console.log(robin.hello())

 */

/* 
// 如果方法装饰器返回一个新的函数，就会替代所装饰的原始函数。
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @log
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

function log(originalMethod:any, context:ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`)
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`)
    return result;
  }

  return replacementMethod;
}

const person = new Person('张三');
console.log(person.greet())
 */

/* 
// 利用方法装饰器，可以将类的方法变成延迟执行。
function delay(milliseconds: number = 0) {
  return function (value, context) {
    if (context.kind === "method") {
      return function (...args: any[]) {
        setTimeout(() => {
          value.apply(this, args);
        }, milliseconds);
      };
    }
  };
}

class Logger {
  @delay(1000)
  log(msg: string) {
    console.log(`${msg}`);
  }
}

let logger = new Logger();
logger.log("Hello World");
 */


/* 
// 方法装饰器的参数context对象里面，有一个addInitializer()方法。
// 它是一个钩子方法，用来在类的初始化阶段，添加回调函数。
// 这个回调函数就是作为addInitializer()的参数传入的，它会在构造方法执行期间执行，
// 早于属性（field）的初始化。
function bound(originalMethod:any, context:ClassMethodDecoratorContext) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(`不能绑定私有方法 ${methodName as string}`);
  }
  context.addInitializer(function () {
    this[methodName] = this[methodName].bind(this);
  });
}

// 类Person的构造方法内部，将this与greet()方法进行了绑定。如果没有这一行，将greet()赋值给变量g进行调用，就会报错了。
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;

    // greet() 绑定 this
    // this.greet = this.greet.bind(this);
  }

  @bound
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const g = new Person('张三').greet;
g() // "Hello, my name is 张三." 

*/

/* 
// 方法装饰器@collect会将所装饰的成员名字，加入一个 Set 集合collectedMethodKeys
function collect(
  value,
  {name, addInitializer}
) {
  addInitializer(function () {
    if (!this.collectedMethodKeys) {
      this.collectedMethodKeys = new Set();
    }
    this.collectedMethodKeys.add(name);
  });
}

class C {
  @collect
  toString() {}

  @collect
  [Symbol.iterator]() {}
}

const inst = new C();
console.log(inst['collectedMethodKeys']) 
*/

/* 
function logged(value, context) {
  const { kind, name } = context
  if (kind === 'field') {
    return function (initialValue) {
      console.log(`initializing ${name} with value ${initialValue}`);
      return initialValue;
    }
  } 
}

class Color {
  @logged name = 'green'
}

const color = new Color()

console.log(color.name) 
*/


/* 

// 属性装饰器的返回值函数，可以用来更改属性的初始值。
function twice(value, context) {
  return initialValue => initialValue * 2;
}

class C {
  @twice
  field = 3;
}

const inst = new C();
console.log(inst.field)
 */


/* 
// 属性装饰器的上下文对象context的access属性，提供所装饰属性的存取器
let acc;

function exposeAccess(value, { access }) {
  acc = access
}

class Color {
  @exposeAccess
  name = 'green'
}

const green = new Color();
console.log(green.name)

console.log(acc.get(green))

acc.set(green, 'red')
console.log(green.name)

 */

/* 
// 第一次读取inst.value，会进行计算，然后装饰器@lazy将结果存入只读属性value，后面再读取这个属性，就不会进行计算了。
function lazy(value, {kind, name}) {
  if (kind === 'getter') {
    return function (this: any) {
      const result = value.call(this)
      Object.defineProperty(
        this,
        name,
        {
          value: result,
          writable: false
        }
      )
      return result;
    }
  }
  return;
}

class C {
  @lazy
  get value() {
    console.log('正在计算……');
    return '开销大的计算结果';
  }
}

const inst = new C();
console.log(inst.value)
// 正在计算……
// '开销大的计算结果'
console.log(inst.value)
// '开销大的计算结果'
 */

/* 
// accessor 装饰器
// accessor修饰符等同于为属性x自动生成取值器和存值器，它们作用于私有属性x
class C {
  accessor x = 1;
}

class C1 {
  #x = 1

  get x() {
    return this.#x
  }

  set x(val) {
    this.#x = val;
  }
}

let c = new C()
c.x = 10

let c1 = new C1()
c1.x = 20 
*/

/* 
// accessor也可以与静态属性和私有属性一起使用。
class C {
  static accessor x = 1;
  accessor #y = 2;
}

let c1 = new C()
console.log(C.x);
 */

/* 
// accessor 装饰器的value参数，是一个包含get()方法和set()方法的对象。
// 该装饰器可以不返回值，或者返回一个新的对象，用来取代原来的get()方法和set()方法。
// 此外，装饰器返回的对象还可以包括一个init()方法，用来改变私有属性的初始值。
class C2 {
  @logged accessor x = 1;
}

function logged(value, { kind, name }) {
  if (kind === 'accessor') {
    let { get, set } = value

    return {
      get() {
        console.log(`getting ${name}`)
        return get.call(this)
      },
      set(val) {
        console.log(`setting ${name} to ${val}`)

        return set.call(this, val)
      },

      init(initialValue) {
        console.log(`initializing ${name} with value ${initialValue}`)
        return initialValue;
      }
    }
  }
}

let c2 = new C2()
console.log(c2.x)

c2.x = 123
 */

// 装饰器的执行顺序
// 装饰器的执行分为两个阶段
// 1.评估(evaluation)：计算@符号后面的表达式的值，得到的应该是函数
// 2.应用(application)：将评估装饰器后得到的函数，应用于所装饰对象。
//                      也就是说，装饰器的执行顺序是，先评估所有装饰器
//                      表达式的值，再将其应用于当前类
// 应用装饰器时，顺序依次为方法装饰器和属性装饰器，然后是类装饰器
/* 
function d(str: string) {
  console.log(`评估 @d(): ${str}`)

  return (value: any, context: any) => console.log(`应用@d(): ${str}`)
}

function log(str: string) {
  console.log(str)
  return str
}

@d('装饰器')
class T {
  @d('静态属性装饰器')
  static staticField = log('静态属性值')

  @d('原型方法')
  [log('计算方法名')]() {}

  @d('实例属性')
  instanceField = log('实例属性值')
}

 */
