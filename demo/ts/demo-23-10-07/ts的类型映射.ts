//映射指的是，将一种类型按照映射规则，转换为另一种类型，
//通常用于对象类型

/* type A = {
  foo: number
  bar: number
}
type B = {
  foo: string
  bar: string
} */
//这两个类型的属性结构式一样的，但是属性的类型不一样。
//如果属性数量多的话，诸葛写起来就很麻烦

//使用类型映射，就可以从类型A得到类型B
/* type A = {
  foo: number;
  bar: number
}
type B = {
  [prop in keyof A]: string
} */
//[prop in keyof A]表示依次得到类型A的所有属性名，然后
// 将每个属性的类型改成string

//在语法上，[prop in keyof A]是一个属性名表达式，表示
//这里的属性名需要计算得到。具体的计算规则如下：
// ·prop：属性名变量，名字可以随便起
// ·in：运算符，用来去除右侧的联合类型的每一个成员
// ·keyof A：返回类型A的每一个属性名，组成一个联合类型

type A = {
  foo: number;
  bar: string;
}
type B = {
  [c in keyof A]: A[c]
}
// 类型b原样赋值了类型A

// 为增加代码复用性，可以把常用的映射写成泛型
type ToBoolean<Type> = {
  [p in keyof Type]: boolean
}
// 上面示例中，定义了一个泛型，可以将其他对象的所有属性值
// 都改成boolean类型

type MyObj = {
  [p in 0|1|2]: string
}
//等同于
type MyObj1 = {
  0:string
  1:string
  2:string
}
// 上面示例中，联合类型0|1|2映射成了三个属性名

// 不使用联合类型，直接使用某种具体类型进行属性名映射，也是可以的
type MyObj2 = {
  [p in 'foo']: number;
}
//等同于
type MyObj3 = {
  foo: number
}

type MyObj4 = {
  [p in string]: boolean
}
//等同于
type MyObj5 = {
  [p: string]: boolean
}

//通过映射，可以把某个对象的所有属性改成可选属性
type A1 = {
  a: string
  b: number
}
type B1 = {
  [Prop in keyof A1]?: A1[Prop] 
}
// 事实上，ts的内置工具类型Partial<T>，就是这样实现的。


// ts内置的工具类Readonly<T>可以将所有属性改为只读属性，
// 实现也是通过映射
type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}
type T = {a: string, b: number}
type R = Readonly1<T>


// 属性修饰符
// 映射会原样赋值原始对象的可选属性和只读属性
type A2 = {
  a?: string
  readonly b:number;
}
type B2 = {
  [p in keyof A2]: A2[p]
}

// +修饰符:写成+?或+readonly,为映射属性添加?修饰符或readonly修饰符
// -修饰符:写成-?或-readonly,为映射属性移除?修饰符或readonly修饰符

// 添加可选属性
type Optional<Type> = {
  [p in keyof Type]+?: Type[p]
}
type t1 = Optional<T>

// 移除可选属性
type Concrete<Type> = {
  [p in keyof Type]-?: Type[p]
}
type t2 = Concrete<A2>


// 添加readonly
type CreateImmutable<Type> = {
  +readonly [p in keyof Type]: Type[p]
}

// 移除readonly
type CreateMutable<Type> = {
  -readonly [p in keyof Type]: Type[p]
}


// 如果同时增加?和readonly这两个修饰符,课程下面这样
// 增加
type MyObj6<T> = {
  +readonly [p in keyof T]+?: T[p]
}

// 移除
type MyObj7<T> = {
  -readonly [p in keyof T]-?: T[p]
}

// ts原生的工具类型Required<T>专门移除可选属性,就是使用-?修饰符实现的.
// 注意,-?修饰符移除了可选属性以后,该属性就不能等于undefinedl ,
// 实际变成必选属性了.但是,这个修饰符不会移除null类型


// 另外,+?修饰符可以简写成?,+readonly修饰符可以简写成readonly
type A3<T> = {
  +readonly [p in keyof T]: T[p]
}
//等同于
type A4<T> = {
  readonly [p in keyof T]?: T[p]
}


// 建名重映射

// ts4.1引入了键名重映射(key remapping),允许改变键名
type A6 = {
  foo: number
  bar: number
}
type B6 = {
  [p in keyof A6 as `${p}ID`]: number
}
//等同于
type B6_1 = {
  fooID: number
  barID: number
}


// 另一个例子
interface Person {
  name: string
  age: number
  location: string
}

type Getters<T> = {
  [p in keyof T as `get${Capitalize<string & p>}`]: () => T[p]
}
type lazyPerson = Getters<Person>
// 等同于
type lazyPerson_1 = {
  getName: () => string;
  getAge: () => number;
  getLocation: () => string;
}
// Capitalize<T>:一个原生的工具泛型,用来讲T的首字母变成大写
// string & p:一个交叉类型,其中的p是keyof运算符返回的键名联合类型
// string|number|symbol,但是Capitalize<T>只能接受字符串作为
// 类型参数,因此string & p只返回p的字符串属性名.


//属性过滤
//键名重映射还可以过滤调某些属性.下面的例子是只保留字符串属性
type User = {
  name: string
  age: number
}
type Filter<T> = {
  [k in keyof T as T[k] extends string ? k: never]: string
}
type FilteredUser = Filter<User>
// 上面示例中,映射k in keyof T获取类型T的名一个属性以后,然后
// 使用as Type修饰键名
// 它的键名重映射as T[K] extends string ? k : never],
// 使用了条件运算符.如果属性值T[k]的类型是字符串,那么
// 属性名不变,否则属性名类型改编为never,即这个属性名不存在.
// 这样就等于过滤了不符合条件的属性,只保留数值为字符串的属性


//3.3 联合类型的映射

// 由于键名重映射可以修改键名类型,所以原始键名的类型不必
// 是string|number|symbol,任意的联合类型都可以用来进行
// 键名重映射

type S = {
  kind: 'square',
  x: number,
  y: number
}

type C = {
  kind: 'cicle',
  radius: number
}

type MyEvents<Events extends {kind:string}> = {
  [k in Events as k['kind']]: (event: k) => void
}

type Config = MyEvents<S>
// 等同于
type Config_1 = {
  cicle: (event: C) => void;
  square: (event: S) => void;
}
//上面示例中, 原始键名的映射是k in Events,这里的Events
// 是两个对象组成的联合类型S|C.所以E是一个对象,然后再通过
// 键名重映射,得到字符串键名E['kind']

type D = {
  kind: string,
  radius: number
}
type E<T> = {
  [k in keyof T]: (e:k) => string
}
type D_1 = E<D>