import { count, songName, add, Point } from './utils'

type Person = {
  name: string
  age: string
}

let p: Partial<Person> = {
  name: 'zhangsan'
}

let p1: Point = {
  x: 1,
  y: 2
}

console.log('hello', p1)

console.log('count', count)
console.log('songname', songName)
console.log('add()', add(1, 2))