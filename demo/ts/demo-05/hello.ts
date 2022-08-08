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

class Point { x: number; y: number; }
class Point3D { x: number; y: number; z: number }
const p: Point = new Point3D();