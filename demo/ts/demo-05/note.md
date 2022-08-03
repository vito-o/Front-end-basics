js 类型

原始类型：number/string/boolean/null/undefined/symbol
对象类型: object(包括 数组、对象、函数)

类型别名
type CustomArray = (number | string)[]

let arr1: CustomArray = [1, 'a']


interface(接口)和type(类型别名)的区别

相同点：都可以给对象指定类型。
不同点：
  接口，只能为对象指定类型
  类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

interface IPerson {
  name: string
  age: number
  sayHi():void
}

type Iperson = {
  name: string
  age: number
  sayHi(): void
}

type NumStr = number | string

//接口的继承

//如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用。
比如，这两个接口都有x、y两个属性，重复写了两次，可以，但很繁琐
interface Point2D { x: number; y: number }
interface Point3D { x: number; y: number; z:number }

更好的方式
interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }


//touple 元组

当需要特定数量的数据格式时候 可以使用元组
如：经纬度[39.123, ,113. 134]

let position: [number, number] = [39.123, ,113. 134]

类型推论

声明变量并初始化 ts自动推论出类型
let age = 18;

ts自动推论出返回值类型
function add(num1: number, num2: number) {
  return num1 + num2;
}


推荐：能省略类型注解的地方就省略（不是偷懒，是充分利用ts类型推论的能力，提升开发效率）
技巧：如果不知道类型，可以通过鼠标放在变量名称上，利用vscode的提示来查看类型

类型断言

const aLink = document.getElementById('id')
//HTMLElement 只有元素公共的属性 而对于特有的属性则没有比如 a标签的href属性
// aLink.href

有时候你会比TS更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。

使用类型断言：
const aLink = document.getElementById('id') as HTMLAnchorElemment

解释：
  1.使用as关键字实现类型断言
  2.关键字as后面的类型是一个更加具体的类型
  3通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法了

另外一种语法，使用<>语法，这种语法形式不常用知道即可

const aLink = <HTMLAnchorElemment>document.getElementById('id')

技巧：在浏览器控制台，通过console.dir()打印DOM元素，在属性列表的最后面，即可看见该元素的类型。




字面量类型

let str1 = 'hello'    //str1的类型是string
const str2 = 'hello'  //str2的类型是'hello'

也可以这么写
let str1: 'aa' = 'aa'
let str2: 18 = 18
但是与类型不一样就会报错
let str1: 'aa' = 'bb' //报错
//Type '"bb"' is not assignable to type '"aa"'

使用模式：字面量类型配合联合类型一起使用
使用场景：用来表示一组明确的可选值列表。
比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个。
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}
解释：参数direction的值只能是up/down/left/right中的任意一个
优势：相比于string类型，使用字面量类型更加精确、严谨


枚举

枚举的功能类似与字面量类型 + 联合类型组合的功能，也可以表示一组明确的可选值。
枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个。

enum Direction { Up, Down, Left, Right }

function changeDirection(direction: Direction) {
  console.log(direction)
}

//字符串枚举
枚举成员的值是字符串
enum Direction {
  Up = 'UP'
  Down = 'DOWN'
  Left = 'LEFT'
  Right = 'RIGHT'
}