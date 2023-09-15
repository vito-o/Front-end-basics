/* 泛型约束 */

interface ILength {
  length: number
}

function getLength<T extends ILength>(value: T): T {
  console.log(value.length)
  return value
}

getLength([1,2,3])
getLength('echo')
getLength({length: 123, ccc: 123})

/* keyof */

interface Person {
  name: string
  age: number
}

type Keys = keyof Person

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

const person = {
  name: 'Echo',
  age: 26,
  gender: 'male'
}

getProp(person, 'age')


/* typeof */
let n: number = 26
type N = typeof n;

let str = 's'
type S = typeof str
// type S1 = typeof 'str'


type Person1 = keyof typeof person



/* in */
enum Direction {
  Up,
  Right,
  Down,
  Left
}

type DirectionType = {
  [key in Direction]: number
}
let a: DirectionType = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
}


type Property = 'name' | 'age' | 'gender' | 'address';

type PropertyMap = {
  [key in Property]: string
}


/* extends */

type NT = number | string

// T必须是number 或 string 类型
function printValue<T extends NT>(value: T) {
  console.log(value)
}

printValue(11)



interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = <Square> {}

square.color = '111'
square.sideLength = 10

/* 条件类型 */
type NoNullAndUndefined<T> = T extends null | undefined ? never : T
let k1: NoNullAndUndefined<number>
let k2: NoNullAndUndefined<undefined>