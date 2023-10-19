// declare 关键字用来告诉编译器,某个类型是存在的,可以再当前
// 文件夹中使用

// declare关键字的重要特点是,它只是通知编译器某个类型是
// 存在的,不用给出具体实现.比如,值描述函数的类型,不给出
// 函数的实现,如果不使用declare,这是做不到的

// declare只能用来描述已经存在的变量和数据结构,不能用来
// 声明新的变量和数据结构
// 另外,所有declare语句都不会出现在编译器后的文件里面
// x = 123
/* 
// 变量x是其他脚本定义的，当前脚本不知道它的类型，编译器就会报错。
// declare let x: number
// x = 123;
 */
/* 
// declare 告诉编译器，变量document的类型是外部定义的（具体定义在 TypeScript 内置文件lib.d.ts）。
// declare var document;
// document.title = 'hello' */
/* 
// declare 关键字只用来给出类型描述，是纯的类型代码，不允许设置变量的初始值，即不能涉及值。
// Initializers are not allowed in ambient contexts
declare let x: number = 1 */

// declare function
// declare关键字可以给出外部函数的类型描述

// 这种单独的函数类型声明语句，只能用于declare命令后面。一方面，TypeScript 不支持单独的函数类型声明语句；另一方面，declare 关键字后面也不能带有函数的具体实现。
// declare function sayHello(name:string): void;
// sayHello('张三')

/* 
// declare class
declare class Animal {
  constructor(name: string);
  eat():void
  sleep():void
}

declare class C {
  public static s0(): string
  private static s1: string

  public a:number
  private b:number

  constructor(arg:number)

  m(x:number, y:number): number;

  get c(): number
  set c(value:number);

  [index:string]:any
}
// 同样的，declare 后面不能给出 Class 的具体实现或初始值 
*/
/* 
// declare module，declare namespace
// 如果想把变量、函数、类组织再一起，可以将declare与module或namespace一起使用
declare namespace AnimalLib {
  class Animal {
    constructor(name: string)
    eat():void;
    sleep():void
  }
  type Animals = 'Fish' | 'Dog'
}

declare module AnimalLib {
  class Animal {
    constructor(name: string)
    eat(): void
    sleep(): void
  }

  type Animals = 'Fish' | 'Dog'
}

// 上面示例中，declare 关键字给出了 module 或 namespace 的类型描述。
// declare module 和 declare namespace里面，加不加export关键字都可以 
*/

/* 
// namespace和module里面使用了export关键字
declare module Foo {
  export var a: boolean;
}

declare module 'io' {
  export function readFile(filename:string):string;
} 
*/


/* 
// 当前脚本使用了myLib这个外部库
let result = myLib.makeGreeting('你好')
// console.log('欢迎词：' + result)

let count = myLib.numberOfGreetings;

declare namespace myLib {
  function makeGreeting(s:string): string;
  let numberOfGreetings: number;
}

*/

/* 
// declare关键字的另一个用途，是为外部模块添加属性和方法时，给出新增部分的类型描述
import { Foo as Bar } from 'moduleA'

declare module 'moduleA' {
  interface Bar extends Foo {
    custom: {
      prop1: string;
    }
  }
}
// 上面实例中，从模块moduleA导入了Foo接口，将其重命名为Bar，并用declare关键字为Bar增加一个属性custom

*/


/* 
import type { Foo as Bar } from './declare-a'

declare module './declare-a' {
  interface Bar extends Foo {
    custom: {
      prop: string
    }
  }
}

let b1: Bar = {
  name: '1',
  age: 18
}

b1.custom = {} */
/* 
// 下面是一个例子。一个项目有多个模块，可以再一个模块中，对另一个模块的接口进行类型扩展
// a.ts
// export interface A {
//   x:number
// }

// b.ts
import { A } from './declare-a'

declare module './declare-a' {
  interface A{
    y: number
  }
}

const a: A = { x: 1, y: 2 }

 */
/* 
import { Foo } from './declare-a'

declare module './declare-a' {
  interface Foo{
    custom: {
      prop: string
    }
  }
}

const a: Foo = { name: '1', age: 2, custom: {prop: '1'} } 

declare module './a' {} 表示对a.ts里面的模块，进行类型声明，
而同名Interface 会自动合并，所以等同于扩展类型写。

使用这种语法进行模块的类型扩展时，有两点需要注意：
1.declare module Name语法里面的模块名NAME，跟import和export的模块名规则是一样的，
且必须跟当前文件加载该模块的语句写法（上例import { A } from './a ）保持一致
2.不能创建新的顶层类型。也就是或，只能对a.ts模块中已经存在的类型进行扩展，
不允许新增加新的顶层类型，比如定义一个接口B
3.不能对默认的default接口进行扩展，只能对export命令输出的命名接口进行扩充。
这是因为在进行类型扩展时，需要依赖输出的接口名。
*/

/* 
// 默写第三方模块，原始作者没有提供接口类型，这时可以在自己的脚本顶部加上下面一行命令
declare module '模块名'
// 例子
declare module 'hot-new-module'
// 加上上面的命令以后，外部模块即使没有类型声明，也可以通过编译。但是从该模块输入的所有接口都将为any类型

// declare module 描述的模块名可以使用通配符
declare module 'my-plugin-*' {
  interface PluginOptions {
    enabled: boolean;
    priority: number;
  }
  function initialize(options: PluginOptions): void;
  export = initialize
}
// 上面例子中，模块名my-plugin-*表示适配所有以my-plugin-开头的模块名
// 比如my-plugin-logger 
*/
/* 
// declare global
// 如果要为js引擎的原生对象添加属性和方法，可以使用declare global {} 语法
export {}

declare global {
  interface String {
    toSmallString(): string
  }
}

String.prototype.toSmallString = ():string => {
  return ''
}
// 上面示例中，为 JavaScript 原生的String对象添加了toSmallString()方法。declare global 给出这个新增方法的类型描述。

// 这个实例第一行的空导出语句 export {} ， 作用时强制编译器将这个脚本当作模块处理。
// 这是因为declare global必须用在模块里面
 */

/* 
export {}

declare global {
  interface ccc {
    myAppConfig: object
  }
}

const config = ccc.myAppConfig;
// declare global 只能扩充现有对象的类型描述，不能增加新的顶层类型 

*/
/* 
// 7.declare enum
// declare关键字给出enum类型描述的例子如下

declare enum E1 {
  A,
  B
}

declare enum E2 {
  A = 0,
  B = 1
}

declare const enum E3 {
  A, B
}

declare const enum E4 {
  A = 0,
  B = 1
} 
*/

// declare module用于类型声明文件
// 我们可以为每个模块脚本，定义一个.d.ts文件，把该脚本用到的类型定义都放在
// 这个文件里。但是，更方便的做法时为整个项目，定义一个大的.d.ts文件，在这个
// 文件里面使用declare module定义每个模块脚本的类型

declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}

declare module "path" {
  export function normalize(p:string): string;
  export function join(...paths: any[]): string;
  export var set: string;
}

//上面示例中，url和path都是单独的模块脚本，但是他们的类型都定义在node.d.ts这个文件里面。

// 使用时，自己的脚本使用三斜杠命令，加载这个类型声明文件
/// <reference path="node.d.ts"/>

// 如果没有上面这一行命令，自己的脚本使用外部模块时，就需要在脚本里面使用declare
// 命令单独给出外部模块的类型