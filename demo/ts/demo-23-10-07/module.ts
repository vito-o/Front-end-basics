// 如果一个文件不包含export语句，但是希望把他当作一个模块
// （即内部变量对外部不可见），而已再脚本头部添加一行语句
// export {}
// 上面这行语句不产生任何实际作用，但会当当前文件呗当作模块
// 处理，所有她的代码都变成了内部代码。


// ts允许输出和 输入类型
// export type Bool = true | false



// import { Bool } from './a'
// let foo: Bool = true

// import { type A, a } from './a'
// import type { A } from './a'

// import type A from './a'
// import type * as A from './a'
// let a: A = 111

// import { A } from './a'
// import type { Point } from './a'
// const p: Point = { x: 1, y: 2 }

// type Bool = true | false 

// export { Bool }

// export interface A {
//   foo: string
// }

// export let a = 123

// export default A

// type A = 'a'
// type B = 'b'

// export { type A, type B}
// export type { A, B }

// class Point {
//   x:number;
//   y:number;
// }
// export type { Point }

// ts 使用 import = 语句输入CommonJS模块
// import fs = require('fs')