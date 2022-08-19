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


类型推断功能

  声明变量并同时初始化值得时候 有类型推断功能
  let num = 123;

  函数返回值的类型
  function add(num1: number, num2: number) {
    return num1 + num2;
  }


const aLink = document.getElementById('link')
使用类型断言来指定我们比系统更加明确的类型

const aLink = document.getElementById('link') as HTMLAnchorElement;
const aLink = <HTMLAnchorElement>document.getElementById('link');



typeof

  实际上，TS也提供了typeof操作符：可以在类型上下文中引用变量或属性的类型（类型查询）
  使用场景：根据已有的变量的值，获取该值的类型，来简化类型书写

  let p = { x: 1, y: 2 }
  function formatPoint(point: {x: number; y: number}) {}
  function formatPoint(point: typeof p) {}

  formatPoint(p)

类型兼容性

//多的给少的赋值，类型兼容性问题
let arr:number[] = [1, 2, 3]
arr.forEach(item => {})

// (method) Array<number>.forEach(
//   callbackfn: (value: number, index: number, array: number[]) => void, 
//   thisArg?: any
// ): void

// class Point { x: number; y: number; }
// class Point3D { x: number; y: number; z: number }
// const p: Point = new Point3D();

除了class之外，ts中的其他类型也存在相互兼容的情况，
包括  1 接口兼容性  2 函数兼容性等。

· 接口之间的兼容性，类似于class。并且，class和interface之间也可以兼容


4.2 类型兼容性

·函数之间兼容性比较复杂，需要考虑：1 参数个数 2 参数类型 3返回值类型
1.参数格式，参数多的兼容参数少的（或者说 参数少的可以赋值给多的）

type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1
let f2: F2 = f1;

解释：
  1.参数少的可以赋值给参数多的，所以f1可以赋值给f2
  2.数组forEach方法的第一个参数是回调函数，该示例中类型为：（value:string, index:number, array: string[]） => void
  3.在js中省略用不到的函数参数实际上很常见的，这样的使用方式，促成了TS中函数类型之间的兼容性。
  4.并且因为回调函数是有类型的，所以，ts会自动推导出参数item、index、array的类型


返回值兼容

type F5 = () => string
type F6 = () => string

let f5: F5 = () => '1'
let f6: F6;
f6 = f5;

type F7 = () => { name: string }
type F8 = () => { name: string, age: number }
let f7: F7 = () => ({name: '123'})
let f8: F8 = () => ({name: '123', age: 18})
// f7 = f8
// f8 = f7
//返回值类型是对象类型，此时成员多的可以赋值给成员少的。

交叉类型
  用于组合多个类型为一个类型

  interface Person { name: string }
  interface Contact { phone: string }
  type PersonDetail = Person & Contact

  let obj: PersonDetail = {
    name: 'jack',
    phone: '133....
  }

交叉类型&和接口继承extends的对比
·相同点：都可以实现对象类型的组合
·不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同

interface A {
  fn: (value: number) => string
}

interface B extends A {
  fn: (value: string) => string
}

//-----------------------------

interface A {
  fn: (value: number) => string
}

interface B {
  fn: (value: string) => string
}

type c = A & B;

//-----------------------------

说明：以上代码，接口继承会报错（类型不兼容）；
     交叉类型没有错误，可以简单的理解为：
fn: (value: string | number) => string


泛型


function id<T>(value: T): T {
  return value;
}

const num = id<number>(10)
console.log(num);

const str = id<string>('123')
console.log(str)

解释：
  1.语法：在函数名称的后面添加<>(尖括号)，尖括号中指定具体的类型，比如，此处的Number。
  2.当传入类型Number后，这个类型就会被函数声明时指定的类型变量T捕获到
  3.此时，T的类型就是number，所以，函数id参数和返回值的类型也都是number

同样，如果传入类型string，函数id参数和返回值的类型就都是string。
这样，通过泛型就做到了让id函数与多种不同的类型一起工作，实现了服用的同时保证了类型安全。


添加泛型约束

添加泛型约束收缩类型，主要有以下两种方式
1.指定更加具体的类型
2.添加约束

1.指定更加具体的类型
function id<T>(value: T[]): T[] {
  console.log(value.length)
  return value;
}

2.添加约束
interface ILength { length: number }
function id<T extends ILength>(value: T): T {
  console.log(value.length)
  return value;
}

解释:
  1.创建描述约束的接口ILength,该接口要求提供length属性
  2.通过extends关键字使用该接口,为泛型(类型变量)添加约束
  3.该约束表示:传入的类型必须具有length属性

  注意:传入的实参(比如,数组)只要有length属性即可,这也符合前面讲到的接口的类型兼容性.

泛型

泛型的类型变量可以有多个,并且类型变量之间还可以约束(比如,第二个类型变量受到第一个类型变量约束).
比如,创建一个函数来获取对象中属性的值
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let person = { name: 'jack', age: 18 }
getProp(person, 'name')

解释:

  1.添加了第二个类型变量key,两个类型变量之间使用(,)都好分隔
  2.keyof 关键字接收一个对象类型,生成器键名称,(可能是字符串或数字)的联合类型.
  3.本实例中keyof T实际上获取的是person对象所有键的联合类型,也就是'name'|'age'
  4.类型变量K受T约束,可以理解为:K只能是T所有键中的任意一个,或者说只能访问对象中
  存在的属性.


泛型接口: 接口也可以配合泛型来使用,以增加其灵活性,增强其复用性.
interface IdFunc<T> {
  id: (value: T) => T
  ids: () => T[]
}

let obj: IdFunc<number> = {
  id(value) { return value },
  ids() { return [1, 3, 5] }
}

解释:
  1.在接口名称的后面添加<类型变量>,那么,这个接口就变成了泛型接口
  2.接口的类型变量,对接口中所有其他成员可见,也就是接口中所有成员都可以
  使用类型变量
  3.使用泛型接口时,需要显示指定具体的类型(比如,此处的IdFunc<number>)
  4.此时,id方法的参数和返回值类型都是number;
  ids方法的返回值类型时number[]

泛型类

class GenericNumber<T> {
  defaultValue: T
  add: (x: T, y: T) => T
}

解释:
  1.类似于泛型接口,在class名称后面添加<类型变量>,这个类就变成了泛型类
  2.此处的add方法,采用的时箭头函数形式属性方式

类似于泛型接口,在创建class实例时,在类名后面通过<类型>来指定明确的类型

泛型工具类型 Partial<T> 用来构造一个类型,将T的所有属性设置为可选
interface Props {
  id: string
  children: number[]
}

type PartialProps = Partial<Props>

解释:构造出来的新类型PartialProps结构和Props相同,但所有属性都变为可选的.


interface Props  {
  id: string
  children: number []
}

type ReadonlyProps = Readonly<Props>
let p1: ReadonlyProps = {
  id: '123',
  children: [111, 11]
}

// p1.id = 111
// assign 分配


泛型工具类型 - Pick<Type, keys> 从Type中选择一组属性来构造新类型
interface Props {
  id: string
  title: string
  children: number[]
}

type PickProps = Pick<Props, 'id' | 'title'>

解释：
  1.Pick工具类型有两个类型变量：1 表示选择谁的属性  2 表示选择几个属性
  2.其中第二个类型变量，如果只选择一个则只传入改属性名即可
  3.第二个类型变量传入的属性只能是第一个类型变量中存在的属性
  4.构造传来的新类型PickProps，只有id和title两个属性类型

泛型工具类型 - Record<Key, Type>构造一个对象类型，属性键为Keys, 属性类型为Type
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let obj: RecordObj = {
  a: ['1'],
  b: ['2'],
  c: ['3'],
}

解释：
  1.Record工具类型有两个类型变量：1表示对象有哪些属性 2表示对象属性的类型
  2.构建的新对象类型RecordObj表示：这个对象有三个属性分别为a/b/c,属性值的类型都是string[]

4.5 索引签名类型

绝大多数情况下，我们都可以在使用对象前就确定对象的结构，并为对象添加准确的类型。
使用场景：当无法确定对象中有那些属性（或者对象中可以初夏任意多个属性），此时，就用到
索引签名类型了。

interface AnyObject {
  [key: string]: number 
}

let obj: AnyObject = {
  a: 1,
  b: 2
}

解释：
  1.使用[key:string]来约束该接口中允许出现的属性名称。表示只要是string类型的属性名称，都可以出现在对象中。
  2.这样，对象obj中就可以出现任意多个属性（比如，a、b）
  3.key只是一个占位符，可以换成任意合法的变量名称
  4.隐藏的前置知识：JS中对象({} )的键是string类型
  

映射类型

映射类型：基于旧类型创建新类型（对象类型），减少重复、提升开发效率
比如，类型PropKeys有x/y/z，另一个类型Type1中也有x/y/z，并且type1中x/y/z的类型相同：
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number }

这样书写没错，但x/y/z重复书写了两次。像这种情况，就可以使用映射类型来进行简化。
type PropKeys = 'x' | 'y' | 'z'
type Type2 = { [Key in PropKeys]: number }

解释：
  1.映射类型是基于索引羡慕类型的，所以，该语法类似于索引前面类型，也使用了[]
  2.Key in PropKeys表示Key可以是PropKeys联合类型中的任意一个，类似于forin(let k in obj)
  3.使用映射类型创建的新对象类型Type2和类型Type1结构完全相同
  4.注意：映射类型只能在类型别名中使用，不能再接口中使用

type Props = { 
  a: number 
  b: string
  c: boolean
}

type Type3 = { [key in keyof Props]: number }

解释：
  1.首先，先执行keyof Props获取到对象类型Props中所有键的联合类型即，'a'|'b'|'c'
  2.然后，Key in ...就表示Key可以是Props中所有的键名称中的任意一个。

映射类型

实际上，前面讲到的泛型工具类型（比如，Partial<T>）都是基于映射类型实现的。
比如，Partial<T>的实现：
type Partial<T> = {
  [P in keyof T]? T[P]
}
type Props = { 
  a: number
  b: string
  c: boolean
}
type PartialProps = Partial<Props>
解释：
  1.keyof T即keyof Props表示获取Props的所有键，也就是：'a'|'b'|'c'
  2.在[]后面添加？(问号),表示将这些属性变为可选的，以此来实现Partial的功能
  3.冒号某某的T[P]表示获取T中的每个键对应的类型。比如，如果是'ab'则类型是number
  如果是'b'则类型是string
  4.最终，新类型PartialProps和旧类型Props结构完全相同，只有让所有类型变为可选。

索引查询（访问）类型  T[P]
作用：用来查询属性的类型。
type Props = {
  a: number
  b: string
  c: boolean
}

type TypeA = Props['a']
解释：Props['a']表示查询类型Props中属性'a'对应的类型number。所以，TypeA的类型
为number.
注意：[]中的属性必须存在于被查询类型中，否则就会报错

索引查询类型的其他使用方式：同时查询多个索引的类型
type Props = {
  a: number
  b: string
  c: boolean
}
type TypeA = Props['a'|'b']
解释：使用字符串字面量的联合类型，获取属性a和b对应的类型，结果为string|number
type TypeA = Props[keyof Props]
解释：使用keyof操作符获取Props中所有键对应的类型，结果为：string|number|boolean


5.2 类型声明文件的使用说明

·创建自己的类型声明文件：
1 项目内共享类型
2 为已有js文件提供类型声明

1.项目内共享类型：如果多个.ts文件中都用到了同一个类型，此时可以创建.d.ts文件提供该类型，实现类型共享。

declare关键字： 用于类型声明，为其他地方（比如，.js文件）已存在的变量声明类型，而不是
创建一个新的变量

1.对于type、interface等这些明确就是TS类型的（只能在ts中使用的），可以省略declare关键字
2.对于let、function等具有双重含义（在js、ts中都能用），应该使用declare关键字，明确指定此处用于类型声明。

为已有js文件提供类型声明
说明：TS项目中也可以使用.js文件
说明：在导入.js文件时，TS会自动加载与.js同名的.d.ts文件，以提供类型声明。
declare关键字：用于类型声明，为其他地方（比如，.js文件）已存在的变量声明类型，而不是创建一个新的变量