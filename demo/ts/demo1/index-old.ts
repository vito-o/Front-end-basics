/*
const username: string = '啊哈萨克垃圾分类'

const count: number = 18;

const str: string = 'asdlk';

const status1: boolean = false;

const val: null = null;

const val1: null = undefined;

const val2: undefined = undefined;

const val3: undefined = null;


function fn():void {}

function fun1(): void {
  //return 1;
}

function fun2(): void {
  return undefined;
}

function fun3(): void {
  return null;
}

// const nv1: never = null;
// const nv2: never = undefined;

function person():never{
  while(true) {}
}

function person1(): never{
  person1()
}

function person2(): never {
  throw new Error();
}

let any1: any;

any1 = null;
any1 = {}
any1 = undefined;

let unknown1: unknown = ''
unknown1 = 1;
unknown1 = '123'
unknown1 = null;
unknown1 = {}

let any2: any = ''
let unknown2: unknown = ''

any2 = 'haha'
unknown2 = 'erer'

let null1: null = null;

null1 = any2;
// null1 = unknown2;
// Type 'unknown' is not assignable to type 'null'


const o1: object = {}
const o2: object = null;
const o3: object = []
const o4: {} = {}

// Property 'name' does not exist on type '{}'
// o4.name = 1;

o4.toString()


const arr1: [] = [];
const arr2: number[] = [1, 2]
const arr3: object[] = [null, {}, []]
const arr4: Array<number> = [1, 2, 3]

class ClassPerson {
  name: string
}

function Person1() {
  
}

const class1: ClassPerson = new Person1();
// Property 'aaa' does not exist on type 'ClassPerson'
// class1.aaa = '123'

class1.name = '123';

const fn1 : () => string = () => '123';

function fn3(a, b): number {
  return a + b;
}
fn3(1, '2')

function fn4(a: any, b: any) : any{
  return a + b;
}
fn4(1, 'adaf')

function fn5(a: number, b: number): number {
  return a + b;
}
fn5(1, 2)

function fn6(obj: {num:number}) {
  return obj.num;
}
fn6({num:123})

const tuple1: [string, number] = ['a', 1]
// const tuple2: [string, number] = ['a', 'a']
// Type 'string' is not assignable to type 'number'.


//RED没有设置值，那么它的值为0
enum e_color{
  RED,
  BLUE = 'blue',
  GREEN = 'green'
}

const testObj1: {name:string, age:number} = {name:'123',age:123}
const testObj2: {name:string, age:number} = {name:'123',age:123}

interface intf1 {
  name: string;
  age: number;
}

const testObj3: intf1 = { name: 'zz', age: 12 }
const testObj4: intf1 = { name: 'az', age: 12 }

interface intf2 {
  readonly name: string;
  readonly age: number;
}

const testObj5: intf2 = { name: 'zz', age: 12 }
// testObj5.name = 'heh'
// Cannot assign to 'name' because it is a read-only property.

interface intf3 {
  readonly name: string;
  readonly age: number;
  sex?: string;
}

const testObj6: intf3 = { name: 'cc', age: 11, sex: 'z' }
const testObj7: intf3 = { name: 'cc', age: 11 }

interface intf4 extends intf3 {
  hobby: number[]
}

const testObj8: intf4 = { name: 'cc', age: 11, sex: 'z', hobby: [123] }

interface intf5 {
  readonly name: string;
  readonly age: number;
  sex?: string;
  [propName:string]: any;
}

const testObj9: intf5 = { name: 'c', age: 11, ee: 123 }

//type，是声明类型别名使用的，别名类型只能定义是：基础静态类型、对象静态类型、元组、联合类型

type type1 = string;
type type2 = string | number;

const t_name: type2 = 'asd'
const t_age : type2 = 18;


//type类型别名和interface接口有什么区别

type type3 = number;
// type type3 = string;
// Duplicate identifier 'type3'.

interface type5 {
  name: string;
}

interface type5 {
  age: number
}

//type类型别名不允许重复名字，interface接口可以出现重复类型名字，如果重复出现则是，合并起来也就
//编程{ name: string, age: number }

const t_1: type5 = {
  name: '123',
  age: 123
}

//2.type支持表达式interface不支持
const t_count: number = 123;

type testType = typeof count;

const t_count2: number = 123;

//interface testType2 {
//  [name: typeof count]: any;
//} 


//3.type支持类型映射，interface不支持
type keys = 'name' | 'age'
type keyObj = {
  [propName in keys]: string;
}

const reference: keyObj = {
  name: '123',
  age: '18'
}
// interface keyObj2 {
//   [propName in keys]: string;
// }


//7 联合类型

//联合类型用|表示，说白了就是满足其中一个类型就可以了

const statusTest: string | number = 'aaa'
const flag : boolean | number = true;

//类型保护
function testStatusFn(params: number | string) {
  if(typeof params == 'string') {
    console.log(params.split)
  }
  if(typeof params == 'number') {
    console.log(params.toFixed())
  }
}

interface frontEnd {
  name: string
}

interface backEnd {
  age: string
}

function testStatusFn2(params: frontEnd | backEnd) {
  if('name' in params) {
    console.log(params.name)
  }
  if('age' in params) {
    console.log(params.age)
  }
}

//as  断言
function testStatusFn3(params: frontEnd | backEnd) {
  console.log((params as frontEnd).name)

  console.log((params as backEnd).age)
}

//8 交叉类型
//交叉就是和联合类型相反，它用到&表示，交叉类型就是两个类型必须存在

function testStatusFn4(params: frontEnd & backEnd) {}

testStatusFn4({age: '123', name: '12'})

//泛型
function test<T> (a: T, b: T) {
  console.log(a, b)
}

test<number>(1, 123);
test<boolean>(true, false);
test<string>('1','a')
test<any>(1, '234')

function test2<T extends number | string, Y extends number | string>(a:T, b: Y){
  console.log(a, b)
}

test2<number, string>(18, '123')
test2<number, string>(18, '123')

class p1{
  name = '123'
  public age = 18;
}

class p2{
  private name = 1
}

const cp2 = new p2()
// cp2.name;

//protected 当前类和子类可以访问
class p3{
  protected name = 123;
}

//implements

interface frontEnd1{
  name: string
  fn: () => void
}

class PersonAll implements frontEnd1{
  name: 'zhangsan'

  fn() {}
}

//抽象类

abstract class Boss {
  name = 'zhang'
  call() {}
}

class A extends Boss {
  call() {
    console.log(this.name)
    console.log('A')
  }
}

class B extends Boss {
  call() {
    console.log('B')
  }
}

new A().call()
*/

/* 
namespace SomeNameSpaceName {
  const q = {}

  export interface obj {
    name: string
  }
}

 */
/* 
export interface valueData {
  name: string
}
 */


/**
 * 实用类型：typescript标准库自带了一些实用类型。这些实用类都是方便接口interface使用
 */
/* 
//1. Exclude
//从一个类型中排除另一个类型，只能是联合类型，从TypeTest类型中排除UtilityLast类型。
//适用于并集类型

interface UtilityFirst {
  name: string
}

interface UtilityLast {
  age: number
}

type TypeTest = UtilityFirst | UtilityLast;
const ObJson : Exclude<TypeTest, UtilityLast> = {
  name: 'zhangsan'
}


//2. Extract
//Extract 正好跟上面的相反，这是选择某一个可赋值的联合类型，从TypeTest类型中只选择UtilityLast类型
//适用于并集类型

const ObJson2: Extract<TypeTest, UtilityLast> = {
  age: 123
}

//3. Readonly
//把数组或对象的所有属性值转换为只读的
//适用于：对象、数组
const ObJson3: Readonly<UtilityFirst> = {
  name: 'zhansan'
}

// ObJson3.name = '123'
// Cannot assign to 'name' because it is a read-only property

//4. Partial
//把对象的所有属性设置为可选的。我们指导interface只要不设置？修饰符，那么对象都是必选的。
//这个实用类可以将属性全部设置为可选的
//适用于：对象
const ObJson4: Partial<UtilityFirst> = {}

//5. Pick
//Pick选择对象类型中的部分key值，提取出来。第一个参数目标值，第二个参数联合key
//适用于：对象

interface UtilityFirst1 {
  name: string
  age: number
  hobby: []
}

const ObJson5: Pick<UtilityFirst1, 'name' | 'age'> = {
  name: 'zhangsan',
  age: 18
}

//6. Omit
//Omit选择对象类型中的部分key，过滤掉。第一个参数目标值，第二个参数联合key
//适用于：对象
interface UtilityFirst2 {
  name: string
  age: number
  hobby: string[]
}

const ObJson6: Omit<UtilityFirst2, 'name' | 'age'> = {
  hobby: ['zhangs', 'lisi']
}

//7. Required
//Required 把对象所有可选属性转换为必选属性
//适用于：对象
interface UtilityFirst3 {
  name?: string
  age?: number
  hobby?: string[]
}

const ObJson7: Required<UtilityFirst3> = {
  name: 'zhansang',
  age: 18,
  hobby: ['hah']
}

//8. Record
//创建一个对象结果集，第一个参数是key值，第二个参数是value值。规定我们只能创建这里面字段值
//适用于：对象

type IndexList = 0 | 1 | 2;
const ObJson8: Record<IndexList, 'zhangsan'> = {
  0: 'zhangsan',
  1: 'zhangsan',
  2: 'zhangsan'
} */


/**
 * 泛型
 * 
 * 软件工厂中我们不仅要创建，一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前
 * 的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了灵活的功能。
 * 
 */

//不用泛型，这个函数可能是这样：
function identity(arg: number): number {
  return arg;
}

//或者， 我们使用any类型来定义函数
function identity1(arg: number): any {
  return arg;
}

/**
 * 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的
 * 类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
 */

/**
 * 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。这里，我们使用了类型变量，他是
 * 一种特殊的变量，只用于表示类型而不是值。
 */
function identity2<T>(arg: T): T{
  return arg;
}

/**
 * 我们给identity2添加了类型变量T。T帮助我们捕获用户传入的类型（比如：number），之后我们就可以
 * 使用这个类型。之后我们再次使用了T当作返回值类型。现在我们可以知道参数类型和返回值类型是相同的
 * 了。这允许我们跟踪函数里使用的类型的信息。
 * 
 * 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。不同于使用any，它不会丢失信息，
 * 像第一个例子那样保持准确性，传入数值类型并返回数值类型。
 * 
 * 我们定义了泛型函数之后，可以用两种方法使用。第一种是，传入所有的参数，包含类型参数
 */
let output = identity2<string>("myString")

/**
 * 这里我们明确的指定了T是string类型，并作为一个参数传给函数，使用了<>而不是()
 * 
 * 第二种方法更普遍。利用了类型推论-即编译器会根据传入的参数自动地帮助我们确定T的类型
 */
let output2 = identity2('myString')

/**
 * 注意我们没必要使用<>来明确地传入类型；编译器可以查看mystring的值，然后把T设置为它的类型。
 * 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动推断出类型的化，只能像上面
 * 那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。
 */

/**
 * 使用泛型变量
 * 
 * 使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。
 * 换句话说，你必须把这些参数当作是任意或所有类型
 */
function identity3<T>(arg: T): T {
  return arg;
}

//如果我们想打印arg的长度，我们可能这样做
function loggingIdentity<T>(arg: T): T {
  //Property 'length' does not exist on type 'T'.
  /* console.log(arg.length)  */
  return arg;
}

/**
 * 如果这么做，编译器会报错说我们使用了arg的.length属性，但没有地方指明arg具有这个属性。记住，
 * 这些类型变量代表的是任意类型，所以使用这个函数的的人可能传入的是个数字，而数字没有length属性
 * 
 * 现在假设我们想操作T类型的数组而不直接是T。由于操作的是数组，所以.length属性应该是存在的。我们
 * 可以像创建其他数组一样创建这个数组。
 */
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg;
}

/**
 * 你可以这样理解loggingIdentity1的泛型：泛型函数loggingIdentity1，接收类型参数T和参数arg，它
 * 是个元素类型是T的数组，并返回元素类型是T的数组。如果我们传入数字数组，将返回一个数字数组，因为
 * 此时T的类型为number。这可以让我们把泛型变量T当作类型的一部分使用，而不是整个类型，增加了灵活性。
 */

//我们也可以这样实现例子
function loggingIdentity2<T>(arg: Array<T>): Array<T>{
  console.log(arg.length)
  return arg;
}

/**
 * 泛型类型
 * 
 * 上一节，我们创建了identity通用函数，可以适用于不同类型。在这节，我们研究一下函数本身的类型，
 * 以及如何创建泛型接口。
 * 
 * 泛型函数的类型与非泛型函数的类型没有什么不同，只是有一个参数在最前面，像函数声明一样
 */
function identity4<T>(arg: T): T{
  return arg; 
}

let myIdentity4: <T>(arg: T) => T = identity4;

//也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就行

function identity5<T>(arg: T): T {
  return arg;
}

let myIdentity5: <U>(arg: U) => U = identity5;

//我们还可以使用带有调用签名的对象字面量来定义泛型函数

function identity6<T>(arg: T): T {
  return arg;
}

let myIdentity6: { <T>(arg: T) : T } = identity6;

//这引导我们去写第一个泛型接口了。我们把上面例子里的对象字面量拿出来作为接口

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity7<T>(arg: T): T{
  return arg;
}

let myIdentity7: GenericIdentityFn = identity7;

//一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。这样我们就能清楚的知道使用的具体
//是哪个泛型类型（比如：Dictonary<string>而不只是Dictonary）。这样接口里的其他成员也能知道
//这个参数的类型了

interface GenericIdentityFn1<T> {
  (arg: T) : T;
}

function identity8<T>(arg: T): T{
  return arg;
}

let myIdentity8: GenericIdentityFn1<number> = identity8;

// myIdentity8(123)

/**
 * 注意，我们的示例做了少许改动，不再描述泛型函数，而是把非泛型函数签名当作为泛型的一部分。当我们
 * 使用GenericIdentityFn1的时候，还得传入一个类型参数来指定泛型得类型（这里是：number），锁定了
 * 之后代码里使用的类型。对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在
 * 接口上是很有帮助的。
 * 
 * 除了泛型接口，我们还可以创建泛型类，注意，无法创建泛型枚举和命名空间
 * 
 */


/**
 * 泛型类
 * 
 * 泛型类型看上去和泛型接口差不多。泛型类使用(<>)扩起泛型类型，跟在类型后面。
 */

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 123;
/* myGenericNumber.add = function(a, b) {
  return a + b;
} */
myGenericNumber.add(123, 123)

/**
 * GenericNumber类的使用十分直观，并且你可能已经注意到，没有什么去限制它只能是number类型.也
 * 可能使用字符串或其他更复杂的类型
 */

let stringNumeric = new GenericNumber<string>();


/**
 * 泛型约束
 * 
 * 我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。在loggingIdentity例子中
 * 我们想访问arg的length属性，但编译器并不能证明每种类型都有length属性，所有就报错了
 * 
 */

function loggingIdentity3<T>(arg: T): T{
  //console.log(arg.length)
  return arg;
}

/**
 * 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。只要传入类型有这个
 * 属性，我们就允许，就是说至少包含这一属性。为此，我们需要列出对于T的约束要求
 * 
 * 为此，我们定义一个接口来描述约束条件。创建一个包含.length属性的接口。使用这个接口和extends
 * 关键字来实现约束。
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity4<T extends Lengthwise>(arg: T): T{
  console.log(arg.length)
  return arg;
}

//现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
//我们需要传入符合约束类型的值，必须包含必须的属性
loggingIdentity4({length: 123, a: 12})


/**
 * 在泛型约束中使用类型参数
 * 
 * 你可以声明一个类型参数，且它被另一个类型参数所约束。比如，现在我们想要用属性名从对象里获取这个属性
 * 并且我们想要确保这个属性存在于对象obj上，因此我们需要在这个类型之间使用约束
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a')
// getProperty(x, 'm')

/**
 * 在泛型里使用类类型
 * 在ts使用泛型创建工厂函数时，需要引用构造函数的类类型
 */

function create<T>(c: { new():T }) : T{
  return new c;
}

create(Number)

//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系

class Beekeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nameTag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: Beekeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A) : A {
  return new c();
}

createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;