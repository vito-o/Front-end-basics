// ts 提供了一些内置的类型工具

// 1.Awaited<Type>
// awaited<Type> 用来取出Promise的返回值，适合用在描述then()方法和await命令对的参数类型
type l_A = Awaited<Promise<string>>

// 也可以返回多重Promise的返回值类型
type l_B = Awaited<Promise<Promise<number>>>

// 如果它的类型参数不是Promise类型，那么就会返回原样
type l_C = Awaited<boolean | Promise<number>>

// Awaited<Type>的实现如下
/* type Awaited1<T> =
  T extends null | undefined ? T :
  T extends object & {
    then(
      onfulfilled: infer F,
      ...args: infer _
    ): any;
  } ? F extends (
    value: infer V,
    ...args: infer _
  ) => any ? Awaited1<...> : never:
  T; */

// 2.ConstructorParameters<Type>
// 提取构造方法type的类型参数，组成一个元组类型返回
type l_T1 = ConstructorParameters<
    new (x:string, y:number) => object
>
// type l_T1 = [x: string, y: number]

type l_T2 = ConstructorParameters<
    new (x?: string) => object
>
// type l_T2 = [x?: string]

// 可以返回一些内置构造方法的参数类型
type l_t1_1 = ConstructorParameters<
    ErrorConstructor
>
// type l_t1_1 = [message?: string]

type l_t1_2 = ConstructorParameters<
    FunctionConstructor
>
// type l_t1_2 = string[]

type l_t1_3 = ConstructorParameters<
    RegExpConstructor
>
// type l_t1_3 = [pattern: string | RegExp, flags?: string]


// 如果参数类型不是构造方法，就会报错
// type l_t2_1 = ConstructorParameters<string> //报错
// type l_t2_2 = ConstructorParameters<Function> //报错

//any类型和never类型是两个特殊值，分别返回unknown[]和never
type l_t3_1 = ConstructorParameters<any>
// type l_t3_1 = unknown[]

type l_t3_2 = ConstructorParameters<never>
// type l_t3_2 = never

// ConstructorParameters<Type>的实现如下
type ConstructorParameters1<
    T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer P)
  => any ? P : never


// 3.Exclude<UnionType, ExcludedMembers>
//   Exclude<UnionType, ExcludedMembers> 用来从联合类型UnionType里面，删除
//   某些类型ExcludedMembers，组成一个新的类型返回。

type l_t4_1 = Exclude<'a'|'b'|'c', 'a'>
// type l_t4_1 = "b" | "c"
type l_t4_2 = Exclude<'a'|'b'|'c', 'a'|'b'>
// type l_t4_2 = "c"
type l_t4_3 = Exclude<string|(()=>void), Function>
// type l_t4_3 = string
type l_t4_4 = Exclude<string|string[], any[]>
// type l_t4_4 = string
type l_t4_5 = Exclude<(()=>void)|null, Function>
// type l_t4_5 = never
type l_t4_6 = Exclude<200 | 400, 200 | 201>
// type l_t4_6 = 400
type l_t4_7 = Exclude<number, boolean>
// type l_t4_7 = number

// Exclude<UnionType, ExcludedMembers>的实现如下
type Exclude1<T, U> = T extends U ? never : T
// type l_t4_71 = Exclude1<'a'|'b'|'c', 'a'|'b'>
// 上面代码中，等号右边的部分，表示先判断T是否兼容U，如果是的就返回never类型，
// 否则返回当前类型T。由于never类型是任何其他类型的子类型，它跟其他类型组成
// 联合类型时，可以直接讲never类型从联合类型中“消掉”，因此Exclude<T, U>就相对于
//删除兼容的类型，剩下不兼容的类型


type l_t5_1 = string | number //type l_t5_1 = string | number
type l_t5_2 = string & number //type l_t5_2 = never
type l_t5_3 = {name:string} & {name: string; age:number}
let l_t5_3_1: l_t5_3 = {name: 'zz', age: 18}


// Extract<Type, Union>
// Extract<UnionType, Union>用来从联合类型UnionType之中，提取指定类型Union
// 组成一个新类型返回。它与Exclude<T, U>正好相反
type l_t6_1 = Extract<'a'|'b'|'c', 'a'>
// type l_t6_1 = "a"
type l_t6_2 = Extract<'a'|'b'|'c', 'a'|'b'>
// type l_t6_2 = "a" | "b"
type l_t6_3 = Extract<'a'|'b'|'c', 'a'|'d'>
// type l_t6_3 = "a"
type l_t6_4 = Extract<string | string[], any[]>
// type l_t6_4 = string[]
type l_t6_5 = Extract<(()=>void)|null, Function>
// type l_t6_5 = () => void
type l_t6_6 = Extract<200|400, 200|201>
// type l_t6_6 = 200

// 如果参数类型Union不包含在联合类型UnionType之中，则返回never类型
type l_t7 = Extract<string|number, boolean>
// type l_t7 = never

// Extract<T, U>的实现如下
type Extract1<T, U> = T extends U ? T : never;


//T extends U ?
// 条件判断
interface Animal_1 {
  eat(): void
}
interface Dog extends Animal_1 {
  bite():void
}
type A_1 = Dog extends Animal_1 ? string  : number;
// extends用来条件判断的语法和js的三元表达式是很相似，如果问好前面的判断为真，
// 则讲第一个类型string赋值给A，否则讲第二个类型number赋值给A
// extends判断条件真假的逻辑是什么？
// 很简单，如果extends前面的类型能够赋值给extends后面的类型，那么表达式判断为真，否则为假
// Dog是Animal的子类，父类比子类的限制更少，能满足子类，则一定满足父类，
// Dog类型的指可以赋值给Animal类型的值，判断为真
interface A2_1 {
  name: string
}
interface A2_2 {
  name: string
  age: number
}
type _A2 = A2_2 extends A2_1 ? string : number


// 5.InstanceType<Type>
// InstanceType<Type>提取构造函数的返回值的类型（即实例类型），
// 参数Type是一个构造函数，等同于构造函数的ReturnType<Type>
type l_t8_1 = InstanceType<
  new () => object
>;  
//type l_t8_1 = object

type l_t8_2 = InstanceType<ErrorConstructor>
// type l_t8_2 = Error
type l_t8_3 = InstanceType<FunctionConstructor>
// type l_t8_3 = Function
type l_t8_4 = InstanceType<RegExpConstructor>
// type l_t8_4 = RegExp


// 由于class作为类型，代表实例类型。要获取它的构造方法，
// 必须把它当成值，然后用typeof运算符获取它的构造方法类型。
class l_t8_5 {
  x = 0;
  y = 0;
}
type l_t8_6 = InstanceType<typeof l_t8_5>
// type l_t8_6 = l_t8_5

// 如果类型参数不是构造方法，就会报错
// type l_t8_7 = InstanceType<string> //报错
// type l_t8_8 = InstanceType<Function> //报错

// 如果类型参数是any或never两个特殊值，分别返回any和never
type l_t8_7 = InstanceType<any>
// type l_t8_7 = any

type l_t8_8 = InstanceType<never>
// type l_t8_8 = never

type InstanceType1<
  T extends abstract new (...args:any) => any
> = T extends abstract new (...args: any) => infer R ? R : any



type Last<Arr extends unknown[]> =
  Arr extends [...infer rest, infer Ele extends number]
    ? Ele : never

type value = Last<[1,2,3]>

type GetReturnType<Func extends Function> =
  Func extends (...args: any[]) => infer ReturnType
    ? ReturnType
    : never

type Result = GetReturnType<() => 'return string'>

// 6.NonNullable<Type>
// NonNullable<Type>用来从联合类型Type产出null类型和undefined类型，组成一个新类型返回，
// 也就是返回Type的非空类型版本

type l_t9_1 = NonNullable<string|number|undefined>
// type l_t9_1 = string | number
type l_t9_2 = NonNullable<string[]|null|undefined>
// type l_t9_2 = string[]
type l_t9_3 = NonNullable<boolean>
// type l_t9_3 = boolean
type l_t9_4 = NonNullable<number|null>
// type l_t9_4 = number
type l_t9_5 = NonNullable<string|null>
// type l_t9_5 = string
type l_t9_6 = NonNullable<null|undefined>
// type l_t9_6 = never

// NonNullable<Type>的实现如下
type NonNullable1<T> = T & {}
// 上面代码中，T&{}等同于求T&Object的交叉类型。
// 由于ts的非空值都属于Object的子类型，所以会返回自身；
// 而null和undefined不属于Object，会返回never类型


// 7.Omit<Type, Keys>
// Omit<Type, Keys>用来从对象类型Type中，删除指定的属性Keys，组成一个新的对象类型返回
interface l_t10_1{
  x:number;
  y:number
}
type l_t10_2 = Omit<l_t10_1, 'x'>
// type l_t10_2 = { y: number; }
type l_t10_3 = Omit<l_t10_1, 'y'>
// type l_t10_2 = { x: number; }

// 指定删除的键名Keys可以是对象类型中不存在的属性，但必须兼容string|number|symbol
type l_t10_4 = Omit<l_t10_1, 'z'>
// type l_t10_2 = { x: number; y: number; }

// Omit<Type, Keys>的实现如下
type Omit1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>


// 8.OmitThisParameter<Type>
// OmitThisParameter<Type>从函数类型中移除this
function toHex(this: Number) {
  return this.toString(16)
}

type l_t11_1 = OmitThisParameter<typeof toHex>
// type l_t11_1 = () => string
// 上面实例中，OmitThisParameter<T>给出了函数toHex()的类型，并将其中的this参数删除
// 如果函数没有this参数，则返回原始函数类型

type OmitThisParameter1<T> = 
  unknown extends ThisParameterType<T> ? T :
  T extends (...args: infer A) => infer R ?
  (...args: A) => R : T


// 9.Parameters<Type>
// Parameters<Type>从函数类型Type里面提取参数类型，组成一个元组返回
type l_t12_1 = Parameters<() => string>
// type l_t12_1 = []
type l_t12_2 = Parameters<(s:string) => void>
// type l_t12_2 = [s: string]
type l_t12_3 = Parameters<<T>(arg: T) => T>
// type l_t12_3 = [arg: unknown]
type l_t12_4 = Parameters<(x: {a:number, b:string}) => void>
// type l_t12_4 = [x: {a: number;b: string;}]
type l_t12_5 = Parameters<(a:number, b:string) => number>
// type l_t12_5 = [a: number, b: string]

// 上面的示例中，Parameters<Type>的返回值会包含函数的参数名

// 如果参数类型type不是带有参数的函数形式，会报错
// type l_t12_6 = Parameters<string> // 报错
// type l_t12_7 = Parameters<Function> // 报错

// Parameters<Type>主要用于从外部模块提供的函数中，获取参数类型
interface SecretName {
  first: string;
  last: string
}
interface SecretSanta {
  name: SecretName
  gift: string
}
export function getGift(name: SecretName, gift: string):SecretSanta {
  return 
}
// 上面示例中，模块只输出了函数getGift()，没有输出函数SecretName和返回值SecretSanta。
// 这是就可以通过Parameters<T>和ReturnType<T>拿到这两个接口类型
type ParaT = Parameters<typeof getGift>[0]
// type ParaT = SecretName

type ReturnT = ReturnType<typeof getGift>
// type ReturnT = SecretSanta

// Parameters<Type>的实现如下：
type Parameters<T extends (...args: any) => any> =
  T extends (...args: infer P) => any ? P : never


// 10.Partial<Type>
// Partial<Type>返回一个新类型，将参数类型Type的所有属性变为可选属性
interface l_t13_1 {
  x: number
  y: number
}
type l_t13_2 = Partial<l_t13_1>
// type l_t13_2 = {x?: number;y?: number;}


// Pick<Type, Keys>
// Pick<Type, Keys>返回一个新的对象类型，第一个参数Type是一个对象类型，
// 第二个参数Keys是Type里面被选定的键名。
interface l_t14_1 {
  x: number
  y: number
}
type l_t14_2 = Pick<l_t14_1, 'x'>
// type l_t14_2 = {x: number;}
type l_t14_3 = Pick<l_t14_1, 'y'>
// type l_t14_2 = {y: number;}
type l_t14_4 = Pick<l_t14_1, 'x'|'y'>
// type l_t14_2 = {x: number;y: number;}

// 指定的键名Keys必须是对象键名Type里面已经存在的键名，否则会报错
// type l_t14_5 = Pick<l_t14_1, 'z'> // 报错

// Picky<Type, Keys>的实现如下
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}


// 12.Readonly<Type>
// Readonly<Type>返回一个新类型，将参数类型Type的所有属性变为只读属性
interface l_t15_1 {
  x: number
  y?: number
}
type l_t15_2 = Readonly<l_t15_1>
// type l_t15_2 = { readonly x: number; readonly y?: number; }

// Readonly<Type>的实现如下
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 我可以自定义类型工具Mutable<Type>，将参数类型的所有属性变成可变属性
type Mutable<T> = {
  -readonly [p in keyof T]: T[p]
}

// Readonly<Type>可以与Partial<Type>结合使用，将所有属性变成只读的可选属性



// 13.Record<Keys, Type>
// Record<Keys, Type>返回一个对象类型，参数Keys用作键名，参数Type用作键值类型
type l_t16_1 = Record<'a', number>
// type l_t16_1 = {a: number;}

// 参数keys可以是联合类型，这是会一次展开为多个键
type l_t16_2 = Record<'a'|'b', number>
// type l_t16_2 = {a: number;b: number;}
type l_t16_3 = Record<'a', number|string>
// type l_t16_3 = {a: string | number;}

// Record<Keys, Type>的实现如下
type Record<K extends string|number|symbol, T> 
  = { [p in K]: T }


// 14.Required<Type>
// Required<Type>返回一个新类型，将参数类型Type的所有属性变为必选属性
// 它与Partial<Type>的作用正好相反
interface l_t17_1 {
  x: number
  y?: number
}
type l_17_2 = Required<l_t17_1>
// type l_17_2 = {x: number;y: number;}

// Required<Type>的实现如下
type Required<T> = {
  [p in keyof T]-?: T[p]
}
// 符号-?表示去除可选属性的‘问号’，使其变为必选属性
// 符号+?表示增加可选属性的‘问号’，等同于？
type Partial1<T> = {
  [p in keyof T]+?: T[p]
}


// 15.ReadonlyArray<Type>
// ReadonlyArray<Type>用来生成一个只读数组类型，类型参数Type表示数组成员的类型
const l_18_1: ReadonlyArray<string> = ['a', 'b', 'c']
// l_18_1[0] = 'x' // 报错
// l_18_1.push('x') // 报错
// l_18_1.pop() // 报错
// l_18_1.splice(1, 1) // 报错
// 上面示例中，变量values的类型是一个只读数组，所以修改成员会报错，并且那些会修改源数组的方法push()、pop()、splice()等都不存在。

// 实现如下
interface ReadonlyArray<T> {
  readonly length: number
  readonly [n:number]: T;
  // ...
}


// 16.ReturnType<Type>
// ReturnType<Type>提取函数类型Type的返回值类型，作为一个新类型返回
type l_19_1 = ReturnType<() => string>
// type l_19_1 = string
type l_19_2 = ReturnType<() => {a:string; b:number}>
// type l_19_2 = {a: string;b: number;}
type l_19_3 = ReturnType<(s:string) => void>
// type l_19_3 = void
type l_19_4 = ReturnType<() => () => any[]>
// type l_19_4 = () => any[]
type l_19_5 = ReturnType<typeof Math.random>
// type l_19_5 = number
type l_19_6 = ReturnType<typeof Array.isArray>
// type l_19_6 = boolean

// 如果参数类型是泛型函数，返回值取决于泛型类型。如果泛型不带有限制条件，就会返回unknown。
type l_19_7 = ReturnType<<T>() => T>
// type l_19_7 = unknown
type l_19_8 = ReturnType<
  <T extends U, U extends number[]>() => T
>
// type l_19_8 = number[]

// 如果类型不是函数，会报错
// type l_19_9 = ReturnType<boolean> //报错
// type l_19_9 = ReturnType<Function> //报错

// any和never是两个特殊值，分别返回any和never。
type l_19_10 = ReturnType<any>
// type l_19_10 = any
type l_19_11 = ReturnType<never>
// type l_19_11 = never

// ReturnType<Type>的实现如下
type ReturnType1<
  T extends (...args: any) => any
> =
  T extends (...args: any) => infer R ? R : any


// 17.ThisParameterType<Type>
// ThisParameterType<Type>提取函数类型中this参数的类型。
type l_20_1 = ThisParameterType<typeof toHex>
// type l_20_1 = Number

// 如果函数没有this参数，则返回unknown

// 实现如下
type ThisParameterType1<T> =
  T extends (this: infer U, ...args: never) => any ? U: unknown


// 18.ThisType<Type>
// ThisType<Type>不返回类型，只用来跟其他类型组成交叉类型，
// 用来提示 TypeScript 其他类型里面的this的类型。
interface HelperThisValue {
  logError: (error:string) => void;
}

let helperFunctions: { [name: string]: Function} & ThisType<HelperThisValue>
  = {
    hello: function() {
      this.logError('Error: Something wrong!')
      this.update()
    }
  }
// 注意，使用这个类型工具时，必须打开noImplicitThis设置。

// ThisType<Type>的实现就是一个空接口。
interface ThisType<T> { }

// 字符串类型工具
// TypeScript 内置了四个字符串类型工具，专门用来操作字符串类型。这四个工具类型都定义在 TypeScript 自带的.d.ts文件里面。

// Uppercase<StringType>
// Uppercase<StringType>将字符串类型的每个字符转为大写。
type l_21_1 = 'hello';
type l_21_2 = Uppercase<l_21_1>;
// type l_21_2 = "HELLO"

// Lowercase<StringType> 将字符串的每个字符转为小写。
type l_21_3 = 'HELLO';
type l_21_4 = Lowercase<l_21_3>;
// type l_21_4 = "hello"


// Capitalize<StringType>将字符串的第一个字符转为大写
type l_21_5 = 'hello';
type l_21_6 = Capitalize<l_21_5>;
// type l_21_6 = "Hello"

// Uncapitalize<StringType> 将字符串的第一个字符转为小写
type l_21_7 = 'HELLO';
type l_21_8 = Uncapitalize<l_21_7>;
// type l_21_8 = "hELLO"