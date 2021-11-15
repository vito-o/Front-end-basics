import { observe } from './observe'
import Watcher from './Watcher'

var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 10,
  g: [22, 33, 44, 55]
}

observe(obj)


// obj.g.splice(2, 1, [100, 200])

/* new Watcher(obj, 'a.m.n', (value, oldValue) => {
  console.log(value, oldValue)
}) */

obj.a.m.n = 30;

console.log(obj)