/**
 * 1. let 和 const
 * 
 * ·var有变量提升，有初始化提升，值可变
 * ·let有变量提升，没有初始化提升，值可变
 * ·const有变量提升，没有初始化提升，值不可变。但如果是定义对象，则值可变
 * 
 * 暂时性死区 问题说明：其实let和const是有变量提升的，但没有初始化提升
 */
/* 
var name = 'zhangsan'

function fn(){
  console.log(name)
  let name = 'sunshin_lin'
} */
// fn();
//Uncaught ReferenceError: Cannot access 'name' before initialization

//块级作用域解决问题
/* 
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  })
}
 */

//扩展运算符
/* const arr1 = [1, 2, 4]
const arr2 = [4, 5, 7]
const arr3 = [7, 8, 9]

const arr = [...arr1, ...arr2, ...arr3] */
// console.log(arr)

//剩余参数
function fnsy(name, ...params) {
  console.log(name, params)
}

// fnsy('zhangsan', 1, 2)
// fnsy('zhangsan', 1, 2, 3, 4, 5)

/**
 * 普通函数和箭头函数的区别：
 * 1.箭头函数不可做为构造函数，不能使用new
 * 2.箭头函数没有自己的this
 * 3.箭头函数没有arguments对象
 * 4.箭头函数没有原型对象
 */


/**
 * Array.reduce
 * 第一个参数callback函数：pre为上次return的值，next为数组的本次遍历的项
 * 第二个参数为初始值，也是一个pre
 */

//计算 1 + 2 + 3 + 4 + 5
const reduceArr = [1, 2, 3, 4, 5]
const sum = reduceArr.reduce((pre, next) => {
  return pre + next
}, 0)
// console.log(sum)

//统计元素出现的个数
const nameArr = ['林三心', 'sunshine_lin', '林三心', '林三心', '科比']
const totalObj = nameArr.reduce((pre, next) => {
  if(pre[next]) {
    pre[next]++
  } else {
    pre[next] = 1;
  }
  return pre
}, {})
// console.log(totalObj)

/**
 * Promise.all方法
 * ·接收一个Promise数组，数组如果有非Promise项，则此项当作成功
 * ·如果所有Promise都成功，则返回成功结果数组
 * ·如果有一个Promise失败，则返回这个失败结果
 */

function fn_all_1(time){
  return new Promise((resolve, reject) => {
    console.log(88)
    setTimeout(() => {
      resolve(`${time}毫秒后成功！`)
    }, time)
  })
}

//[fn_all_1(2000), fn_all_1(3000), fn_all_1(1000)]
//数组内的方法会被立即执行
/* 
Promise.all([fn_all_1(2000), fn_all_1(3000), fn_all_1(1000)]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
}) */
//三秒后成功显示
//(3) ["2000毫秒后成功！", "3000毫秒后成功！", "1000毫秒后成功！"]


function fn_all_2(time, isResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后成功`) : reject(`${time}毫秒后失败`)
    }, time)
  })
}
/* 
Promise.all([fn_all_2(2000, true), fn_all_2(3000), fn_all_2(1000, true)]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
}) */
//3000毫秒后失败

/**
 * Promise.race 方法
 * ·接收一个Promise数组，数组中如果有非promise项，则此项当作成功
 * ·哪个Promise最快得到结果，就返回那个结果，无论成功失败
 */
function fn_race(time, isResolve){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后成功`) : reject(`${time}毫秒后失败`)
    }, time)
  })
}
/* 
Promise.race([fn_race(2000, true), fn_race(3000), fn_race(5000)]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
}) */

//class
//静态属性和静态方法，使用static定义的属性和方法只能class自己用，实例用不了

class Person {
  constructor(name) {
    this.name = name;
  }

  static age = 22;

  static fn() {
    console.log('hehe')
  }
}

// console.log(Person.age)
// Person.fn();

// const sunshine_lin = new Person('zhangsan')
// console.log(sunshine_lin)
// sunshine_lin.fn();

const obj = {
  name: 'zhangsan',
  age: 22,
  gender: 'man',
  doing: {
    morning: 'xx',
    afternoon: '2342',
    evening: 'sleep'
  }
}
/* 
const { name, age, gender } = obj;
console.log(name, age, gender)

const { name : myname } = obj
console.log(myname)

const { name, age, doing, doing: { evening } } = obj;
console.log(name, age, doing, evening)
 */

// const arr = [1, 2, 3]

/* 
const [a, b, c] = arr;
console.log(a, b, c) 
*/

//默认值
/* 
const [a, b, c, d = 5] = arr;
console.log(a, b, c, d) 
*/

//乱序解构
/* const { 1: a, 0: b, 2: c } = arr;
console.log(a, b, c) */

/**
 * Set
 * 
 */

/* 
const set1 = new Set()
set1.add(1)
set1.add(2)
console.log(set1) 
*/
/* 
const set2 = new Set([1, 2, 3])
set2.add(4)
set2.add('zhangsan')
console.log(set2)
console.log(set2.has(2))
console.log(set2.size)
set2.delete(2)
console.log(set2)
 */

//Set的不重复性
/* const set1 = new Set([1])
set1.add(1)
console.log(set1)

const set2 = new Set([1, 2, 'zhangsna', 3, 3, 'zhangsna'])
console.log(set2) */

//set的不重复性
// let o = {name:'zhangsan'}
// const set1 = new Set([1, {name:'zhangsan'}, 2, {name:'zhangsan'}])
// console.log(set1)
//Set(4) {1, {…}, 2, {…}}

/* const arr = [1, 2, 3, 4, 4, 5, 5, 66, 9, 1]

const quchongArr = [...new Set(arr)]
console.log(quchongArr) */


//map
/* 
const map1 = new Map()
map1.set(true, 1)
map1.set(1, 2)
map1.set('xx', 'xxxx')
console.log(map1)
console.log(map1.has('xx'))
console.log(map1.get(true))
map1.delete(1)
console.log(map1) */

//map也可以传入键值对数组集合
/* 
const map2 = new Map([[true, 1], [1, 2], ['xx', 'xxxx']])
console.log(map2) */

//求幂运算符
/* 
const num1 = Math.pow(3, 2)
console.log(num1)

const num2 = 3 ** 2;
console.log(num2) */

//for await of

function fnof(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后成功`)
    }, time)
  })
}

// fnof(3000).then(res => console.log(res))
// fnof(1000).then(res => console.log(res))
// fnof(2000).then(res => console.log(res))

async function asyncFn() {
  const arr = [fnof(3000), fnof(1000), fnof(2000), fnof(5000)]
  for await (let x of arr) {
    console.log(x)
  }
}
// asyncFn();

//Array.flat
// const arr = [1, 2, 3, [4, 5, 6]]
// console.log(arr.flat())
//(6) [1, 2, 3, 4, 5, 6]

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// console.log(arr.flat(2))

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
// console.log(arr.flat(Infinity))

//Array.flatMap

// let arr = ["科比 詹姆斯 安东尼", "利拉德 罗斯 麦科勒姆"];

//console.log(arr.map(x => x.split(' ')).flat())

//flatMap 就是 flat + map，一个方法顶两个
// console.log(arr.flatMap(x => x.split(' ')))

//Object.fromEntries
//前面ES8的Object.entries是把对象转成键值对数组，而Object.fromEntries则相反，是把键值对数组转为
//对象
/* 
const arr = [
  ['name', 'zhangsan'],
  ['age', 22],
  ['gender', '难']
]
console.log(Object.fromEntries(arr))
 */
//将map转为对象
/* 
const map = new Map()
map.set('name', 'zhangsan')
map.set('age', 22)
map.set('gender', '难')

console.log(Object.fromEntries(map)) */

//es11
/**
 * Promise.allSettled
 * ES11新增的Promise的方法
 * ·接收一个Promise数组，数组中如有非promise项，则此项当作成功
 * ·把每一个Promise的结果，集合成数组，返回
 * 
 */
/* 
function fn_allSettled(time, isResolve){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后成功`) : reject(`${time}毫秒后失败`)
    }, time)
  })
}

Promise.allSettled([fn_allSettled(2000, true), fn_allSettled(3000), fn_allSettled(1000)]).then(res => {
  console.log(res)
}) */
/* 
(3) [{…}, {…}, {…}]
0: {status: "fulfilled", value: "2000毫秒后成功"}
1: {status: "rejected", reason: "3000毫秒后失败"}
2: {status: "rejected", reason: "1000毫秒后失败"}
length: 3
[[Prototype]]: Array(0) */

//?.和??
//?.，中文名为可选链
//比如我们需要一个变量，是数组且有长度，才做某些操作
const list = null
if(list && list.length){}

//使用可选链
if(list?.length){
  console.log('有length')
} else {
  console.log('无length')
}


//比如有一个对象，我要去一个可能不存在的值，甚至我们都不确定obj是否存在
const obj_1 = {
  cat: {
    name: 'haha'
  }
}

const dog = obj_1.dog && obj_1.dog.name;
console.log(dog)

//可选链
const dog1 = obj_1?.dog?.name
const dog2 = obj_1?.cat?.name
console.log(dog1, dog2)

//比如有一个数组，我不确定它存不存在，存在的话就取索引为1的值
const arr = null;
console.log(arr && arr[1])

//可选链
console.log(arr?.[1])

//比如有一个函数，我们不确定它存不存在，存在的话就执行它
const fn = null;
fn && fn()

//可选链
fn?.()

//再说??，中文名为空位合并运算符

/* 
const a = 0 || 'zhangsan'
const b = '' || 'zhangsan'
const c = false || 'zhangsan'
const d = undefined || 'zhangsan'
const e = null || 'zhangsan' */

//而??和||最大的区别是，在??这，只有undefined和null才算假值
let a = 0 ?? 'zhangsan'
let b = '' ?? 'zhangsan'
let c = false ?? 'zhangsan'
let d = undefined ?? 'zhangsan'
let e = null ?? 'zhangsan'

/**
 * Promise.any
 * 
 * ES12新增的方法
 * ·接收一个Promise数组，数组中如有非Promise项，则此项当作成功
 * ·如果有一个Promise成功，则返回这个成功结果
 * ·如果所有Promise都失败，则报错
 */
function fn_any(time, isResolve){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolve ? resolve(`${time}毫秒后成功`) : reject(`${time}毫秒后失败`)
    }, time)
  })
}

/* 
Promise.any([fn_any(2000, true), fn_any(3000), fn_any(1000, true)]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
}) */

Promise.any([fn_any(2000), fn_any(3000), fn_any(1000)]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})
//AggregateError: All promises were rejected

//数字分隔符
const num = 1_000_000_000

//||= 和 &&=
//或等于(||=)  a ||= b 等同于 a || (a = b)
//且等于(&&=)  a &&= b 等同于 a && (a = b)