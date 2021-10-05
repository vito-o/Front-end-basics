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




