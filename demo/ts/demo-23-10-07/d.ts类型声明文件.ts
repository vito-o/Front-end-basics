// 简介
// 单独使用的模块，一般会同时提供一个单独的类型声明文件（declaration file）,
// 把本模块的外部接口的所有类型都写在这个文件里面，便于模块使用者了解接口，
// 也便于编译器检查使用者的用法是否正确

// 类型声明文件里面只有类型代码，没有具体的代码实现。它的文件名一般为[模块名].d.ts
// 的形式，其中的d表示declaration声明

/* 
// 举例来说，有一个模块的代码如下：
const maxInterval = 12

function getArrayLength(arr) {
  return arr.length
}

module.exports = {
  getArrayLength,
  maxInterval
}

// 它的类型声明文件可以写成下面这样
export function getArrayLength(arr: any[]): number;
export const maxInterval: 12
*/

/* 
// 类型声明文件也可以使用export = 命令，输出对外接口。下面是moment模块的类型
// 声明文件的例子
declare module 'moment' {
  function moment(): any
  export = moment
}
// 上面示例中，模块moment内部有一个函数moment()，而export = 表示module.exports
// 输出的就是这个函数
 */

/* 
// 除了使用export = , 模块输出在类型声明文件中，也可以使用export default表示
// 模块输出
module.exports = 3.142

// 类型输出文件
// 写法一
declare const pi: number;
export default pi;

// 写法二
declare const pi: number;
export = pi;
// 上面示例中，模块输出的是一个整数，那么可以用export default或export = 表示输出这个值
 */

/* 
// 下面是一个如何使用类型声明文件的简单例子。有一个类型声明文件types.d.ts
// types.d.ts
export interface Character {
  catchphrase?: string;
  name: string
}
// 然后，就可以在 TypeScript 脚本里面导入该文件声明的类型。
// index.ts
import { Character } from './types'

export const character: Character = {
  catchphrase: 'Yee-haw!',
  name: 'Sandy Cheeks'
} 
*/

/* 
//类型声明文件也可以包括在项目的tsconfig.json文件里面，这样的化，编译器打包
// 项目时，会自动将类型声明文件加入编译，而不必在每个脚本里面加载类型声明文件
// 比如，moment模块的类型声明文件是moment.d.ts，使用moment模块的项目可以将其
// 加入项目的tsconfig.json文件
{
  "compilerOptions": {},
  "files": [
    "src/index.ts",
    "typings/moment.d.ts"
  ]
} 
*/

// 类型声明文件的来源
// 类型声明文件主要有一下三种来源
// 1.typescript编译器自动生成
// 2.typescript内置类型文件
// 3.外部模块的类型声明文件，需要自己安装

/* 
// 自动生成
// 只要使用编译器选项declaration，编译器就会在编译时自动生成单独的类型声明文件
// 下面时在tsconfig.json文件里面，打开这个选项
{
  "compilerOptions": {
    "declaration": true
  }
}

// 你也可以在命令行打开这个选项
// tsc --declaration
 */

/**
 * 内置声明文件
 * 安装typescript语言时，会同时安装一些内置的类型声明文件，主要是内置的全局对象
 * （javascript语言接口和运行环境API）的类型声明
 * 
 * 这些内置声明文件位于Typescript语言安装目录的lib文件内，数量大概有几十个，下面
 * 时其中一些主要文件
 * `lib.d.ts
 * `lib.dom.d.ts
 * `lib.es2015.d.ts
 * `lib.es2016.d.ts
 * `lib.es2017.d.ts
 * `lib.es2018.d.ts
 * `lib.es2019.d.ts
 * `lib.es2020.d.ts
 * `lib.es5.d.ts
 * `lib.es6.d.ts
 * 
 * 这些内置声明文件的文件名统一为"lib.[description].d.ts"的形式，其中description
 * 部分描述了文件内容。比如, lib.dom.d.ts这个我文件就描述了DOM结构的类型
 * 
 * 如果开发者想了解全局对象的类型接口（比如ES6全局对象的类型），那么就可以去看这些内置
 * 声明文件。
 * 
 * typescript编译器会自动根据编译目标target的值，加载对应的内置声明文件，所以
 * 不需要特别的配置。但是，可以使用编译选项lib，指定加载哪些内置声明文件。
 * {
 *    "compilerOptions": {
 *      "lib": ["dom", "es2021"]
 *    }
 * }
 * 上面示例中，lib选项指定加载dom和es2021这两个内置类型声明文件
 * 编译选项noLib会禁止加载任何内置声明文件
 * 
 */

/**
 * 2.3外部类型声明文件
 * 如果项目中使用了外部的某个第三方代码库，那么就需要这个库的类型声明文件。
 * 
 * 这时又分成三种情况
 * 1.这个库自带类型声明文件
 * 一般来说，如果这个库的源码包含了[vendor].d.ts文件，那么就自带了类型声明文件。其中的vendor表示这个库的名字，比如moment这个库
 * 就自带moment.d.ts。使用这个库可能需要单独加载它的类型声明文件。
 * 
 * 2.这个库没有自带，但是可以找到社区制作的类型声明文件
 * 第三方库如果没有提供类型声明文件，社区往往会提供。ts社区主要使用DefinitelyTyped仓库，克重类型声明文件都会提交到哪里，已经
 * 包含几千个第三方库
 * 
 * 这些声明文件都会作为一个单独的库，发布到npm的@types名称空间之下。比如jQuery的类型声明文件就发部成@types/jquery这个库，使用时
 * 安装这个库就可以了
 * 
 * npm install @types/jquery --save-dev
 * 
 * 执行上面的命令，@types/jquery这个库就安装到项目的node_modeule/@types/jquery目录，里面的Index.d.ts文件就是jQuery的类型声明文件。
 * 如果类型声明文件不是Index.d.ts，那么就需要在package.json的types或者typings字段，指定类型声明文件的文件名
 * 
 * typescript会自动加载node_modules/@types目录下的模块，但可以使用编译选项typeRoots改变这种行为
 * {
 *    "compilerOptions": {
 *      "typeRoots": ["./typings", "./vendor/types"]
 *    }
 * }
 * 上面示例表示，ts不在node_module/@types目录，而是去更当前tsconfig.json同级的typings和vendor/types子目录，加载类型模块了
 * 
 * 默认情况下，ts会自动加载typeRoots目录里面的所有模块，编译选项types可以指定加载哪些模块
 * 
 * {
 *  "compilerOptions": {
 *    "types": ["jquery"]
 *  }
 * }
 * 上面设置中，types属性时一个数组，成员是所要加载的类型模块，要加载几个模块，这个数组就有几个成员，每个类型
 * 在typeRoots目录下都有自己的子目录。这样的化，ts就会自动去jquery子目录，加载jquery的类型声明文件
 * 
 * 
 * 3.找不到类型声明文件，需要自己写
 * 有时实在没有第三方库的类型声明文件，又很难完整给出该库的类型描述，这是你可以告诉ts相关对象的类型是any
 * 比如使用jQuery的脚本可以写成下面这样
 * 
 * declare var $:any
 * 
 * // 或者
 * declare type JQuery = any;
 * declare var $: JQuery;
 * 
 * 上面代码表示，jQuery的$对象是外部引入的，类型是any，也就是Typescript不用对它进行类型检查
 * 也可以采用下面的写法，将整个外部模块的类型设置any
 * declare module '模块名';
 * 有了上面的命令，指定模块的所有接口都将视为any类型
 * 
 * 
 * 3.declare 关键字
 * 
 * 类型声明文件值包含类型描述，不包含具体实现，所以非常适合使用declare语句来描述
 * 类型。declare关键字的具体用法，详见《declare关键字》
 * 
 * 类型声明文件里面，变量的类型必须使用declare命令，否则回报错，因为变量声明语句
 * 是值相关代码
 * declare let foo: string;
 * 
 * interface 类型没有declare都可以，因为interface是完全的类型代码
 * interface Foo {}
 * declare interface Foo {}
 * 
 * 类型是声明文件里面，顶层可以使用export命令，也可以不用，除非使用者脚本回显式
 * 使用export命令输入类型
 * 
 * export interface Data {
 *    version: string
 * }
 * 
 * declare module 'moment' {
 *    export interface Moment {
 *      format(format:string): string;
 * 
 *      add(amount: number, unit:'day' | 'months' | 'years'): Moment;
 * 
 *      subtract(amount: number, unit: 'days' | 'months' | 'years'): Moment;
 *    }
 * 
 *    function moment(input?: string | Date)： Moment;
 * 
 *    export default moment;
 * }
 * 
 * 
 * declare namespace D3 {
 *    export interface Selectors {
 *      select: {
 *        (selector:string): Selection;
 *        (element: EventTarget): Selection;
 *      }
 *    }
 * 
 *    export interface Event {
 *      x: number;
 *      y: number;
 *    }
 * 
 *    export interface Base extends Selectors {
 *      event: Event;
 *    }
 * }
 * 
 * declare var d3: D3.Base;
 * 
 * 
 * 4.模块发布
 * 
 * 当前模块如果包含自己的类型声明文件，可以在package.json文件里面添加一个
 * types字段或typings字段，指明类型声明文件的位置
 * 
 * {
 *    "main": "./lib/main.js",
 *    "types": "./lib/main.d.ts"
 * }
 * 
 * 注意，如果类型声明文件为index.d.ts，且在项目的根目录中，那就不需要在package.json
 * 里面注明了。
 * 
 * 有时，类型声明文件回单独发布成一个npm模块，这时用户就必须同时加载该模块
 * {
 *    "main": "./lib/main.js",
 *    "dependencies": {
 *       "browserify": "latest",
 *       "@types/browserify": "latest",
 *    }
 * }
 * 
 * 
 * 5.三斜杠命令
 * 
 * 如果类型声明文件非常多，可以拆分成多个文件，然后入口文件使用三斜杠命令，加载其他
 * 拆分后的文件
 * 
 * 举例来说，入口文件是main.d.ts，里面的即可定义在interfaces.d.ts，函数定义在
 * functions.d.ts。那么，main.d.ts里面可以用三斜杠命令，加载后面两个文件
 * /// <reference path="./interfaces.d.ts" />
 * /// <reference path="./functions.d.ts" />
 * 
 * 三斜杠命令（///）是一个typescript编译器命令，用来指定编译器行为。它只能用在
 * 文件的头部，如果用在其他地方，会被当作普通注释。另外，若一个文件中使用了三斜线
 * 命令，那么在三斜线命令之前只允许使用单行注释、多行注释和其他三斜线命令，否则
 * 三斜杠命令也会被当作普通的注释。
 * 
 * 除了拆分类型声明文件，三斜杠命令也可以用于普通脚本加载类型声明文件
 * 三斜杠命令主要包含三个参数，代表三种不同的命令。
 * · path
 * · types
 * · lib
 * 
 * 5.1 /// <reference path="" />
 * 
 * /// <reference path="" /> 最常见的三斜杠命令，告诉编译器在编译时需要包括的
 * 文件，常用来声明当前脚本依赖的类型文件。
 * 
 * /// <reference path="./lib.ts"/>
 * let count = add(1, 2)
 * 
 * 上面示例表示，当前脚本依赖于./lib.t，里面是add()的定义。编译当前脚本时，
 * 还会同时编译./lib.ts。编译产物会有两个js文件，一个当前脚本，另一个就是
 * ./lib.js
 * 
 * 下面的例子是当前脚本依赖于 Node.js 类型声明文件。
 * 
 * /// <reference path="node.d.ts" />
 * import * as URL from "url";
 * let myUrl = URL.parse('https://www.typescriptlang.org')
 * 
 * 编译器会在预处理阶段，找出所有三斜杠引用的文件，将其添加到编译列表中，然后一起编译
 * 
 * path参数指定了所有引入文件的路径。如果该路径时一个相对路径，则基于当前脚本的
 * 路径进行计算
 * 
 * 使用该命令时，有一下两个注意事项。
 * ·path参数必须指定一个存在的文件，若文件不存在会报错
 * ·path参数不用徐指向当前文件
 * 
 * 
 * 模型情况下，每个三斜杠命令引入的脚本，都会编译成单独的js文件。如果希望编译后
 * 只产出一个合并文件，可以使用编译选项outFile。但是，outFile编译选项不支持
 * 合并CommonJS模块和ES模块，只有当编译参数module的值设为None、System或AMD时
 * 才能编译成一个文件。
 * 
 * 如果打开了编译参数noResolve，则忽略三斜杠指令。将其当作一般的注释，原样保留
 * 在编译产物中。
 * 
 * 
 * 5.2 /// <reference types="" />
 * types参数用来告诉编译器当前脚本依赖某个DefinitelyTypedled类型库，通常安装在
 * node_modules/@types目录
 * 
 * types参数的值时类型库的名称，也就是安装到node_modules/@types目录中的子目录
 * 的名称
 * 
 * /// <reference types="node" />
 * 
 * 上面示例中，这个三斜杠命令表示编译时添加Node.js的类型库，实际添加的脚本是
 * node_modules目录里面的@types/node/index.d.ts
 * 
 * 可以看到，这个命令的作用类似于import命令
 * 
 * 注意，这个命令只在你自己手写类型声明文件（.d.ts文件）时，才有必要用到，也就是说，
 * 只应该用在.d.ts文件中，普通的.ts脚本文件不需要写这个命令。如果是普通的.ts脚本
 * 可以使用tsconfig.json文件的types熟悉指定依赖的类型库
 * 
 * 5.3 /// <reference lib="" />
 * 
 * /// <reference lib="..." /> 命令允许脚本文件显式包含内置lib库，等同于在
 * tsconfig.json文件里面使用lib属性指定lib库
 * 
 * 前文说过，安装typescript软件包时，会同时安装一些内置的类型声明文件，即内置
 * 的lib库。这些库文件位于typescript安装目录的lib文件夹中，他们描述了js语言和
 * 引擎的标准API
 * 
 * 库文件并不是固定的，会随着typescript版本的升级而更新。库文件统一使用
 * "lib.[description].d.ts"的命名方式，而 /// <reference lib=""/>里面的lib
 * 属性值就是库文件名的description部分，比如lib="es2015"就表示加载库文件
 * lib.es2015.d.ts
 * 
 * /// <reference lib="es2017.string"/>
 * 
 * 上面示例中，es2017.string对应的库文件就是lib。es2017.string.d.ts
 * 
 */




