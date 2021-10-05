//基础类型

//布尔值
let isDone: boolean = false;

//数字
//和js一样，ts里的所有数字都是浮点数。这些浮点数的类型是number。支持十进制、十六进制二和八进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串
let name1: string = 'bob';
let age1: number = 37;
let sentence1: string = `Hello, my name is ${ name }

I'll be ${ age1 + 1 } years old next month.`

//数组
let list1: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

//元组
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x1: [string, number];
x1 = ['hello', 10];

// console.log(x1[0].substr(1))
// console.log(x1[1].substr(1))

//当访问一个越界的元素，会使用联合类型代替
// x1[3] = 'world';(Error)

//枚举
enum Color { Red, Green, Blue }
let c1: Color = Color.Green

//默认情况下，从0开始为元素编号。你也可以手动指定成员的数值。
enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green;

//或者，全部都采用手动赋值
enum Color3 { Red = 1, Green = 2, Blue = 4 }
let c3: Color3 = Color3.Green;

//枚举类型提供的一个便利时你可以由枚举的值得到她的名字。
enum Color4 { Red = 1, Green, Blue }
let colorName: string = Color4[2];

//Any
let notSure: any = 4;
notSure = 'maybe a string instead'
notSure = false;

let prettySure: Object = 4;
// prettySure.toFixed();

//当你只知道一部分数据的类型时，any类型也是有用的。比如，你又一个数组，她包含了不同的类型的数据
let list: any[] = [1, true, 'free']

//void
//某种程度上来说，void类型像是与any类型相反，她表示没有任何类型。当一个函数没有返回值，你通常会见到其返回值类型是void
function warnUser(): void {
  console.log('Thie is my warning message')
}

//什么一个void类型的变量没有什么大用，因为你只能为他赋予undefined和null
let unusable1: void = undefined;
let unusable2: void = null;


//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

/**
 * 默认情况下null和undefined是所有类型的字类型，就是说你可以把null和undefined赋值给number类型的变量
 */

//Never
//never类型表示是那些永不存在的值的类型。例如，never类型是那些总是会抛出异常或根本就不会由返回值的函数表达式或箭头函数表达式的返回值类型；
//never类型是任何类型的字类型，也可以赋值给任何类型；然而，没有类型是never的字类型或可以赋值给never类型。即使any也不可以赋值给never

function error(message: string) : never {
  throw new Error(message)
}

function fail() {
  return error('something failed')
}

function infiniteLoop():never {
  while(true) {}
}

//Object
//object表示非原始类型，也就是number, string, boolean, symbol, null 或 undefined之外的类型
//使用object类型，就可以更好的表示像Object.create()这样的api

declare function create(o: object | null) :  void

create({prop: 0})
create(null)

// create(42)
// create('string')
// create(false)
// create(undefined)

/**
 * 类型断言
 * 
 * 有时候你会遇到这样的情况，你会比ts更了解某个值的详细信息。通常会发生在你清楚地知道一个实体具有
 * 比它现有类型更切确的类型
 * 
 * 通过类型断言这种方式可以高低速编译器，‘相信我，我知道自己在干什么’。类型断言号必其他语言里的
 * 类型转换，但是不进行特殊的数据检测和解构。它没有运行时的影响，只是在编译阶段起作用。ts会假设你
 * 已经进行了必须的检查
 */

//类型断言由两种形式。其一是“尖括号”语法
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length;

//另一种为as语法
let someValue1: any = 'this is a string'
let strLength1: number = (someValue1 as string).length;