/**
 * 变量声明
 * 
 * 函数内两个作用域嵌套，内层作用域中的i可以屏蔽掉外层作用域中的i--如下代码执行正确
 * for(let i = 0 ; i < 5; i++){
 *    for(let i = 0; i < 7; i++) {
 *      console.log(i)
 *    }
 *    console.log(i, '~')
 * }
 * 
 */

/**
 * 回想一下签名setTimeout的例子，我们最后需要使用立即执行的函数表达式来获取每次for循环迭代里的
 * 状态。实际上，我们做的是为获取到的变量创建了一个新的变量环境。
 * 
 * 当let声明出现在循环体里的时拥有完全不同的行为。不仅是在循环里引入了一个新的变量环境，而是针对
 * 每次迭代都会创建这样一个新作用域。这就是我们在使用立即执行的函数表达式时需要做的事。所以在
 * setTimeout例子里我们仅使用let声明就可以了
 * 
 * for(let i = 0; i < 10; i++) {
 *  setTimeout(function(){console.log(i)}, 100 * i)
 * }
 * 
 */

/**
 * 解构数组
 */
let input = [1, 2];
let [first, second] = input;

console.log(first)
console.log(second);

//交换变量值
[first, second] = [second, first];

//作用域函数参数
function f([first, second] : [number, number]) {
  console.log(first, second)
};

let arr:[number, number] = [1, 2];
// f(arr)

//里可以在数组里使用...语法创建剩余变量
let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1)
console.log(rest)

//当然，由于是js，你可以忽略你不关心的尾随元素
let [first2] = [1, 2, 3, 4]
console.log(first2)

let [, second3, , rourth3] = [1, 2, 3, 4]


//对象解构
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
let { a, b } = o;

(
  {a, b} = { a: 'baz', b: 101}
);
console.log(a, b)
//我们需要用括号将它括起来，因为ijs通常会将以 { 起始的语句解析为一个块

let o2 = {
  a2: 'foo',
  b: 12,
  c: 'bar'
}
let { a2, ...passthrough } = o2;
console.log(a2, passthrough)

//属性重命名
//你可以给属性以不同的名字
let o3 = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
let { a: newName1, b: newName2 } = o3;
// console.log(newName1, newName2)

//如果你想指定它的类型，仍然需要在

