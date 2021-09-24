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
}