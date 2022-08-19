/* console.log('hello ts')

type CustomArray = (number | string)[]

let arr1: CustomArray = [1, 'a']


const add = (num1: number, num2: number): number => {
  return num1 + num2;
}

const add2: (num1 :number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.log(add(3, 3))
console.log(add2(3, 3))

//可选参数
function mySlice(start?: number, end?: number): void {
  console.log('start index ', start, 'end index ', end)
}

mySlice(1, 4); */

/* let person : { name: string, age: number, sayHi(): void } = {
  name: 'zhangsan',
  age: 18,
  sayHi() {}
}

console.log(person)

//接口类型
interface IPerson {
  name: string
  age: number
  sayHi():void
}

let person1 : IPerson = {
  name: 'zhangsan',
  age: 18,
  sayHi() {}
} */

/* interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }

let obj1: Point2D = {
  x: 1,
  y: 2
}

let obj2: Point3D = {
  x: 1, 
  y: 2,
  z: 3
}

console.log(obj1, obj2) */

/* // let age = 18;

const aLink = document.getElementById('id') as HTMLAnchorElement
//HTMLElement 只有元素公共的属性 而对于特有的属性则没有比如 a标签的href属性
console.log(aLink.href)

// let str1 = 'hello'    //str1的类型是string
// const str2 = 'hello'  //str2的类型是'hello'

// let str1: 'aa' = 'aa'
// let str2: 18 = 18

// let str1: 'aa' ='bb' //报错

function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction)
}
changeDirection('right') */

/* enum Direction { Up, Down, Left, Right }

function changeDirection(direction: Direction) {
  console.log(direction)
}

changeDirection(Direction.Down) */

/* enum Direction { 
  Up = 'UP', 
  Down = 'DOWN', 
  Left = 'LEFT',  
  Right = 'RIGHT'
} */

// let p = { x: 1, y: 2 }
// function formatPoint(point: {x: number; y: number }) {}
// formatPoint(p)

// function formatPoint(point: typeof p) {}


/* class Person {
  age: number
  gender: string
}

let p = new Person();
p.age; */

/* class Animal {
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
dog.bark()
dog.move() */

interface Singable {
  sing(): void
}

/* class Person implements Singable {
  sing(): void {
    console.log('你是。。。')
  }
}

let p = new Person()
p.sing() */
/* 
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

class SmallDog extends Animal {
  selfMove() {
    this.move()
  }
}

let dog = new Dog();
dog.bark() */
// dog.move()

/* 
class Animal {
  private move() {
    console.log('move alone')
  }
}

class Dog extends Animal {
  bark() {
    // this.move()
  }
} */

/* class Person {
  readonly age: number = 18;
  constructor(age: number) {
    this.age = age;
  }
} */

// let arr = ['a', 'b', 'c']

// arr.forEach(item => {})
// arr.forEach((item, index) => {})
// arr.forEach((item, index, array) => {})

// class Point {
//   x: number = 0; 
//   y: number = 0;
//   constructor() {}
// }
// class Point2D {
//   x: number = 0; 
//   y: number = 0;
//   constructor() {}
// }
// let p: Point = new Point2D();
// p.x = 1;
// p.y = 2;
// console.log(p)

/* class Point { x: number; y: number; }
class Point3D { x: number; y: number; z: number }
const p: Point = new Point3D(); */

/* let age = 18;

function add(num1: number, num2: number) {
  return num1 + num2;
} */

// const aLink = document.getElementById('link')
// const aLink = document.getElementById('link') as HTMLAnchorElement;
// const aLink = <HTMLAnchorElement>document.getElementById('link');

// console.log(typeof 'string')

/* let p = { x: 1, y: 2 }
// function formatPoint(point: {x: number; y: number}) {}
function formatPoint(point: typeof p) {}

formatPoint(p) */

/* class Person {
  readonly age: number = 18

  constructor(age: number) {
    this.age = age;
  }

  setAge() {
    // this.age = 20;
  }
}

interface IPerson {
  readonly name: string
}

let obj: IPerson = {
  name: 'jack'
}

//Cannot assign to 'name' because it is a read-only property.
obj.name = 'rose' */


//多的给少的赋值，类型兼容性问题
// let arr:number[] = [1, 2, 3]
// arr.forEach(item => {})

// (method) Array<number>.forEach(
//   callbackfn: (value: number, index: number, array: number[]) => void, 
//   thisArg?: any
// ): void

// class Point { x: number; y: number; }
// class Point3D { x: number; y: number; z: number }
// const p: Point = new Point3D();
/* 
interface Point { x: number; y: number }
interface Point2D { x: number; y: number }

let p11: Point = {x: 1, y: 2 };
let p22: Point2D = p11;

interface Point3D { x: number, y: number, z: number }
let p33: Point3D = {x: 1, y: 2, z: 1 }

p22 = p33
class Point3D { x: number; y: number; z: number }
let p44: Point2D = new Point3D(); */


/* type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1 = (a: number) => {console.log(a)}
let f2: F2 = f1;
 */
// f2(222, 33)

/* type F5 = () => string
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
//返回值类型是对象类型，此时成员多的可以赋值给成员少的。 */


/* interface Person { name: string }
interface Contact { phone: string }
type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'jack',
  phone: '133....'
} */

// interface A {
//   fn: (value: number) => string
// }

// interface B extends A {
//   fn: (value: string) => string
// }

/* interface A {
  fn: (value: number) => string
}

interface B {
  fn: (value: string) => string
}

type c = A & B; */


// function id<T>(value: T): T {
//   return value;
// }

// const num = id<number>(10)
// console.log(num);

// const str = id<string>('123')
// console.log(str)

// //泛型类型自动推断
// const num1 = id('10')

// function id<T>(value: T[]): T[] {
//   console.log(value.length)
//   return value;
// }

// 比如，将类型修改为T[] （T类型的数组），因为只要是数组就一定存在length属性，因此就
// 可以访问了

//泛型约束收缩类型
/* interface ILength { length: number }
function id<T extends ILength>(value: T): T {
  console.log(value.length)
  return value;
}

let num = id({aa: 123, length: 111})
console.log(num)

id(['a', 'b']) */

/* function getProp<T, K extends keyof T>(obj: T, key: K) {
  console.log(obj[key])
  return obj[key]
}

getProp({name: 'jack', age: 18}, 'age')
getProp({name: 'jack', age: 18}, 'name')
// getProp({name: 'jack', age: 18}, 'name1');

getProp(18, 'valueOf')
getProp('abc', 'split')
getProp('abc', 1)
getProp(['a'], 'keys') */

/* interface IdFunc<T> {
  id: (value: T) => T
  ids: () => T[]
}

let obj: IdFunc<number> = {
  id(value) {
    return value
  },
  ids() {
    return [1, 2, 3]
  }
} */

/* const strs = ['a', 'b', 'c']
strs.forEach(item => {}) */

/* class GenericNumber<T> {
  defaultValue: T
  add: (x: T, y: T) => T = (x: T, y: T) => x;
}

const myNum = new GenericNumber<number>();
myNum.defaultValue = 10
myNum.add(111, 222) */

/* class GenericNumber<T> {
  defaultValue: T
  add: (x: T, y: T) => T

  constructor(value: T) {
    this.defaultValue = value;
  }
}

const myNum = new GenericNumber('aaa')
myNum.defaultValue = '111' */

/* interface Props {
  id: string
  children: number[]
}

type PartialProps = Partial<Props>;

let p: PartialProps = {} */

/* interface Props  {
  id: string
  children: number []
}

type ReadonlyProps = Readonly<Props>
let p1: ReadonlyProps = {
  id: '123',
  children: [111, 11]
}

// p1.id = 111
// assign 分配 */


/* interface Props {
  id: string
  title: string
  children: number[]
}
type PickProps = Pick<Props, 'id' | 'title'>

let obj: PickProps = {
  id: '123',
  title: 'ha'
} */

/* type RecordObj = Record<'a' | 'b' | 'c', string[]>

let obj: RecordObj = {
  a: ['1'],
  b: ['1'],
  c: ['1'],
} */

/* const arr = [1, 3, 2]
arr.forEach

interface MyArray<T> {
  [index: number]: T
}
let arr1: MyArray<number> = [1, 2, 3]
 */

/* type PropKeys = 'x' | 'y' | 'z'
type Type2 = { [K in PropKeys] : number }

let o : PropKeys = 'x'
let o1: Type2 = {
  'x': 123,
  'y': 123,
  'z': 123,
} */
/* 
type Props = { 
  a: number 
  b: string
  c: boolean
}

type Type3 = { [K in keyof Props]: number }
  
type TypeA = Props['a'] */

type Props = {
  a: number
  b: string
  c: boolean
}

type TypeA = Props['a'|'b']
let num1: TypeA = 'a'
type TypeB = Props[keyof Props]
let num2: TypeB = 'a'