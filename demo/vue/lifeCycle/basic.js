/**
 * 
 * 7.vue的单项数据流
 * 
 * 数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据
 * 进行修改。这样会防止子组件意外改变父组件的状态，从而导致应用的数据流难以理解。
 * 注意：子组件直接用v-model绑定父组件传过来的prop这样时不规范的写法 开发环境会报警告
 * 
 * 如果实在要改变父组件的prop值，可以再data里定义一个变量并用prop的值初始化它， 之后用$emit通知
 * 父组件去修改
 * 
 * computed和watch的区别和应用的场景
 * 
 * computed是计算属性，依赖其他属性计算值，并且computed的值有缓存，只有当计算值变化才会返回内容，
 * 它可以设置getter和setter。
 * 
 * watch监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
 * 
 * 计算属性一般用在模板渲染中，某个值是依赖了其他的的响应式对象甚至是计算属性计算而来；
 * 监听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
 * 
 * 
 * vue3.
 * 
 * ·响应式原理的改变Vue3.x使用Proxy取代Vue2.x版本的Object.defineProperty
 * ·组件选项声明方式Vue3.x使用Composition API， setup是 vue3.x新增的一个选项，他是组件内使用
 * Composition API的入口
 * 
 * ·模板语法变化slot具名查插槽语法  自定义指令v-model升级
 * 
 * ·其他方面的改变支持Fragment（多根节点）和Protal(在dom其他部分渲染组件内容)组件，针对一些特殊的
 * 场景做了处理。基于treeshaking优化
 * 
 * 14.Vue的父子组件生命周期钩子函数执行顺序
 * 
 * ·加载渲染过程
 * 
 * 父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount
 * -> 子mounted -> 父mounted
 * 
 * ·子组件更新过程
 * 
 * 父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
 * 
 * ·父组件更新过程
 * 
 * 父beforeUpdate -> 父updated
 * 
 * ·销毁过程
 * 
 * 父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed
 * 
 * 15虚拟DOM，优缺点
 * 
 * 由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟dom的产生原因
 * vue2的Virtual DOM借鉴了开源库snabbdom的实现。Virtual DOM本质就是用一个原生的js对象去描述
 * 一个DOM节点，就是真实DOM的一层抽象。
 * 
 * 优点：
 * 1.保证性能下限：框架的虚拟DOM需要适配任何上层API可能产生的操作，他的一些DOM操作的实现必须是
 * 普适的，所以他的性能并不是最优的；但是比起粗暴的DOM操作性能要好很多，因此框架的虚拟DOM至少
 * 可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限。
 * 
 * 2.无须手动操作DOM：我们不再需要手动去操作DOM，只需要写好View-Model的代码逻辑，框架会根据虚拟
 * DOM和数据双向绑定，帮我们可预期的方式更新视图，极大提高我们的开发效率。
 * 
 * 3.跨平台：虚拟DOM本质上是js对象，而DOM于平台强相关，相比之下虚拟DOM可以进行方便的跨平台操作，
 * 例如服务器渲染、weex开发等。
 * 
 * 缺陷：
 * 1.无法进行极致优化：虽然虚拟DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能
 * 要求极高的应用中虚拟DOM无法进行正对象的极致优化。
 * 
 * 2.首次渲染大量DOM是，由于多了一层虚拟DOM的计算，回避innerHTML插入慢。
 * 
 * v-model原理
 * 
 * v-model只是语法糖而已
 * 
 * v-model在内部为不同的输入元素使用不同的property并抛出不同的事件
 * ·text和textarea元素使用value property和input事件
 * ·checkbox和radio使用checked property和change事件
 * ·select字段将value作为prop并将change作为事件
 * 
 * <input v-model="sth"/>
 * <input v-bind:value="sth" v-on:input="sth = $event.target.value"/>
 * 
 * <currency-input v-model="price"></currency-input>
 * <currency-input :value="price" @input="price = arguments[0]"></currency-input>
 * 
 * Vue.component('currency-input', {
 *  template: `
 *    <span>
 *      <input ref="input" :value="value" @input="$emit('input', $event.target.value)"/>
 *    </span>
 *  `,
 *  props: ['value']
 * })
 * 
 * 
 * v-for为什么要加key
 * 
 * 如果不使用key，Value会使用一种最大限度减少动态元素
 * 
 * 
 * vue-router路由钩子函数是什么，执行顺序是什么
 * 
 * 路由钩子的执行流程，钩子函数种类有：全局守卫、路由守卫、组件守卫
 * 
 * 完整的导航解析流程
 * 1.导航被触发
 * 2.在失活的组件里调用beforeRouteLeave
 * 3.调用全局的beforeEach守卫
 * 4.在重用的组件里调用beforeRouteUpdate守卫
 * 5.在路由配置里调用beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件里调用beforeRouteEnter
 * 8.调用全局的beforeResolve守卫
 * 9.导航被确认。
 * 10.调用全局的afterEach钩子
 * 11.触发DOM更新
 * 12.调用beforeRouteEnter守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入
 * 
 * 
 * Vue.mixin 
 * 
 * 原理类似“对象的继承”，当组件初始化时会调用mergeOptions方法进行合并，采用策略模式针对不同的属性
 * 进行合并。当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并
 * 
 * 
 * 浏览器的Event Loop
 * 
 * 事件循环就是一个循环，是各个异步线程用来通信和协同执行的机制。各个线程为了交换消息，还有一个
 * 公用的数据区，这就是事件队列。各个异步线程执行完后。通过事件触发线程将回调事件放到事件队列，
 * 主线程每次干完手上的活儿就来看看这个队列有没有新活，有的就取出来执行。
 * 
 * 流程讲解如下：
 * 1.主线程每次执行时，先看啊可能要执行的时同步任务还时异步的API
 * 2.同步任务就继续执行，一直执行完
 * 3.遇到异步API就将它交给对于的异步线程，自己继续执行同步任务
 * 4.异步线程执行异步API，执行完后，将异步回调事件放入事件队列上
 * 5.主线程受伤的同步任务干完后就来事件队列看看有没有任务
 * 6.主线程发现事件队列有任务，就取出里面的任务执行
 * 7.主线程不断循环上述流程
 * 
 * 前面的流程图为了便于理解，简化了事件队列，其实事件队列里面的事件还可以分两类：宏任务和微任务。
 * 微任务拥有更高的优先级，当事件循环遍历队列时，先检查微任务队列，如果里面有任务，就全部拿来执行，
 * 执行完之后在执行一个宏任务。执行每个宏任务之前都要检查下微任务队列是否有任务，如果有，优先执行
 * 微任务队列。
 * 
 * 1.一个Event Loop可以有一个或多个事件队列，但是只有一个微任务队列
 * 2.微任务队列全部执行完会重新渲染一次
 * 3.每个宏任务执行完都会重新渲染一次
 * 4.requestAnimationFrame处于渲染阶段，不再微任务队列，也不再宏任务队列
 * 
 * 所以想要知道一个异步API在哪个阶段执行，我们得知道他时宏任务还是微任务。
 * 
 * 常见宏任务有：
 * 1.script(可以理解为外层同步代码)
 * 2.setTimeout/setInterval
 * 3.setImmediate(Node.js)
 * 4.I/O
 * 5.UI事件
 * 6.postMessage
 * 
 * 常见微任务有：
 * 1.Promise
 * 2.process.nextTick(Node.js)
 * 3.Object.observe
 * 4.MutaionObserver
 * 
 * 上面这些事件类型中要注意Promise，他是微任务，也就是说它会在定时器前面运行。
 * 
 * Node.js的Event Loop
 * 
 * Node.js是运行在服务端的js，虽然他也用到了V8引擎，但是他的服务目的和环境不同，导致了他API于
 * 原生js有些区别，他的Event Loop还要处理一些I/O，比如新的网络连接等，所以于浏览器Event Loop
 * 也是不一样的。Node的Event Loop是分阶段的。
 * 
 * 
 * 
 */
function reactive(target) {
  //根据不同参数创建不同响应式对象
  return createReactiveObject(target, mutableHandlers)
}

function createReactiveObject(target, baseHandler) {
  if(!isObject(target)) {
    return target;
  }

  const observed = new Proxy(target, baseHandler);
  return observed;
}

const get = createGetter();
const set = createSetter();

function createGetter() {
  return function get(target, key, receiver) {
    //对获取的值进行反射
    const res = Reflect.get(target, key, receiver)

    if(isObject(res)) {
      //如果获取的值是对象类型，则返回当前对象的代理对象
      return reactive(res)
    }

    return res;
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const oldValue = target[key]
    const hadKey = hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)

    if(!hadKey) {
      console.log('属性新增', key, value)
    } else if (hasChanged(value, oldValue)) {
      console.log('属性值被修改', key, value)
    }

    return result;
  }
}

export const mutableHandlers = {
  get,
  set
}


function getDataCount(){
  const res = baseApi.dataByType({});
  if(res.code !== 200){
      return this.$Message.error(res.msg);
  }

  this.tasks[1].count = utils.toHasUnitString(res.data.checkNum)?.data;
  this.tasks[1].unit = utils.toHasUnitString(res.data.checkNum)?.unit + '条';
  this.tasks[4].count = utils.toHasUnitString(res.data.desensNum)?.data;
  this.tasks[4].unit = utils.toHasUnitString(res.data.desensNum)?.unit + '条';
}

/* function defineReactive(data, key, value = data[key]){
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
}) */