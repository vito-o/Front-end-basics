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

enum Direction { 
  Up = 'UP', 
  Down = 'DOWN', 
  Left = 'LEFT',  
  Right = 'RIGHT'
}