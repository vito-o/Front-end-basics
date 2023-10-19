// namespace是一种将相关代码组织在一起的方式，中文译为“命名空间”

// 它出现在 ES 模块诞生之前，作为 TypeScript 自己的模块格式而发明的。
// 但是，自从有了 ES 模块，官方已经不推荐使用 namespace 了。

namespace Utils {
  function isString(value: any) {
    return typeof value === 'string'
  }

  isString('yes')
}

// Property 'isString' does not exist on type 'typeof Utils'
// Utils.isString('no')

/* 
// 如果要在命名空间以外使用内部成员，就必须为该成员加上export前缀，表示对外输出该成员。
namespace Utility {
  export function log(msg: string) {
    console.log(msg)
  }
  export function error(msg:string) {
    console.error(msg)
  }
}

Utility.log('Call me')
Utility.error('maybe!') 
*/

/* 
// namespace 内部还可以使用import命令输入外部成员，相当于为外部成员起别名。
// 当外部成员的名字比较长时，别名能够简化代码
namespace Utils {
  export function isString(value:any) {
    return typeof value === 'string'
  }
}

namespace App {
  import isString = Utils.isString

  isString('yes')
  Utils.isString('yes')
} */


/* namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons
let sq = new polygons.Square()
// 等同于
new Shapes.Polygons.Square() */

/* 
// namespace可以嵌套
namespace Utils {
  export namespace Messaging {
    export function log(msg: string) {
      console.log(msg)
    }
  }
}

Utils.Messaging.log('hello') */
/* 
// namespace 不仅可以包含实义代码，还可以包括类型代码。
namespace N {
  export interface MyInterface {}
  export class MyClass {}
} */

// namespace 与模块的作用是一致的，都是把相关代码组织在一起，对外输出接口。
// 区别是一个文件只能有一个模块，但可以有多个 namespace。
// 由于模块可以取代 namespace，而且是 JavaScript 的标准语法，还不需要编译转换，
// 所以建议总是使用模块，替代 namespace。


// 如果 namespace 代码放在一个单独的文件里，那么引入这个文件需要使用三斜杠的语法。
/// <reference path = "SomeFileName.ts">

/* 
// namespace 的输出
// namespace 本身也可以使用export命令输出，供其他文件使用。
export namespace Shapes {
  export class Triangle {}
  export class Square {}
}


import { Shapes } from './namespace'
let t = new Shapes.Triangle()

import * as shapes from './namespace'
let t2 = new shapes.Shapes.Triangle() */


// namespace 的合并
// 多个同名的 namespace 会自动合并，这一点跟 interface 一样
// 这样做的目的是，如果同名的命名空间分布在不同的文件中，TypeScript 最终会将它们合并在一起。这样就比较方便扩展别人的代码。
/* namespace Animals {
  export class Cat {}
}
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}

Animals.Cat
Animals.Dog */

/* 
// 合并命名空间时，命名空间中的非export的成员不会被合并，但是它们只能在各自的命名空间中使用。
namespace N {
  const a = 0;

  export function foo() {
    console.log(a);  // 正确
  }
}

namespace N {
  export function bar() {
    foo(); // 正确
    console.log(a);  // 报错 Cannot find name 'a'
  }
} */

/* 
// 命名空间还可以跟同名函数合并，
// 但是要求同名函数必须在命名空间之前声明。
// 这样做是为了确保先创建出一个函数对象，
// 然后同名的命名空间就相当于给这个函数对象添加额外的属性。
function f() {
  return f.version;
}

namespace f {
  export const version = '1.0';
}

f()
f.version */

/* 
class C {
  foo = 1;
}

namespace C {
  export const bar = 2;
}
C.bar */


/* enum E {
  A,
  B,
  C,
}

namespace E {
  export function foo() {
    console.log(E.C);
  }
}

E.foo() */
/* 
// 注意，Enum 成员与命名空间导出成员不允许同名。
enum E {
  A, // 报错
  B,
}

namespace E {
  export function A() {} // 报错 Duplicate identifier 'A'.
} */