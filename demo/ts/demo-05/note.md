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


typeof 

TS也提供了typeof：可以在类型上下文中引用变量或属性的类型（类型查询）
使用场景：根据已有的值，获取该值的类型，来简化类型的书写。

let p = { x: 1, y: 2 }
function formatPoint(point: {x: number; y: number }) {}
formatPoint(p)

function formatPoint(point: typeof p) {}

解释：
  1.使用typeof操作符来获取变量p的类型，结果与第一种（对象字面量形式的类型）相同
  2.typeof出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文
  3.注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型
  (比如，函数调用的类型)

  class类

  类继承的两种方式：
    1 extends 继承父类
    2 implements 实现接口

  说明： js中只有extends， 而implements是ts提供的

  class Animal {
    move() {
      console.log('move')
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('汪！')
    }
  }

  const dog = new Dog();

  解释：
    1.通过extends关键字实现继承
    2.子类Dog继承父类Animal，则Dog的示例对象Dog就同时具有了父类Animal和子类Dog的所有属性和方法

class类

类继承的两种方式： 1 extends(继承父类) 2 implements(实现接口)

interface Singable {
  sing(): void
}

class Person implements Singable {

}


class类 的 protected
表示受保护的，仅对其声明所在类和子类中（非实例对象）可见

class Animal {
  protected move() {
    console.log('move alone')
  }
}

class Dog extends Animal {
  bark() {
    console.log('xxx')
    this.move()
  }
}

解释：
  1.在类属性或方法前面添加protected关键字，来修饰改属性或方法
  是受保护的。
  2.在子类的方法内部可以通过this来访问父类中受保护的成员，但是与类型不一样就会报错对实例不可见！


private：表示私有的，只在当前类中可见，对实例对象及其子类也是
不可见的

class Animal {
  private move() {
    console.log('move alone')
  }
}

class Dog extends Animal {
  bark() {
    console.log('xxx')
    this.move()
  }
}

私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的。




readonly 只读修饰符

readonly：表示只读，用来防止在构造函数之外对属性进行赋值

class Person {
  readonly age: number = 18   //常量   常量没有类型的话 就是字面量类型
  constructor(age: number) {
    this.age = age;
  }
}

解释：
  1.使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能
  修饰方法
  2.注意：属性age后面的类型注解（比如，此处的number）如果不加，
  则age的类型为18（字面量类型）
  3.接口或者{}表示的对象类型，也可以使用readonly

let obj: {readonly name: string } = {
  name: 'JACK'
}


类型兼容性

let arr = ['a', 'b', 'c']

arr.forEach(item => {})
arr.forEach((item, index) => {})
arr.forEach((item, index, array) => {})

(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

ts声明中需要三个参数， 但我们用的时候forEach的回调函数可以 只传一个参数就是类型兼容性。


有两种类型系统
1.StructuralType System (结构化类型系统)
2.NominalType System(标明类型系统)

ts采用的是结构化类型系统，也叫做duck typing（鸭子类型），类型检查
关注的是值所具有的形状。

也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为他们属于同一类型。

class Point {x: number; y: number}
class Point2D {x: number; y: number}

const p: Point = new Point2D();

解释：
  1.Point和Point2D是两个名称不同的类
  2.变量p的类型被显示标注为Point类型，但是，它的值却是Point2dD的实例，并且没有类型错误
  3.因为TS是结构化类型系统，只检查Point和Point2D的结构是否相同（相同，都具有x和y两个属性，属性类型也相同）。
  4.但是，如果在NominalType Type System中，他们是不同的类，类型无法兼容。

  注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为他们属于同一类型，这种说法并不准确
  更准确的说法：对于对象类型来说，y的成员至少与x相同，则x兼容y（成员多的可以赋值给少的）。
  class Point { x: number; y: number; }
  class Point3D { x: number; y: number; z: number }
  const p: Point = new Point3D();

解释：
  1.Point3D的成员至少与Point相同，则Point兼容Point3D
  2.所以，成员多的Point3D可以赋值给成员少的Point。