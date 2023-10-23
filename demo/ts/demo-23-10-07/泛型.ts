// 类型参数的约束条件
// 很多类型参数并不是无限制的，对于传入的类型存在约束条件
function f_comp<T> (a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
// 上面示例中，类型参数 Type 有一个隐藏的约束条件：它必须存在length属性。
// 如果不满足这个条件，就会报错。

// ts提供了一种语法，允许在类型参数上面写明约束条件，如果不满足条件，编译时
// 就会报错。这样也可以有良好的语义，对类型参数进行说明

function comp<T extends { length: number }> (a: T, b: T) {
  if (a.length >= b.length) {
    return a
  }
  return b;
}
// 上面示例中，T extends { length: number } 就是约束条件，表示类型参数T
// 必须满足 { length: number }，否则就会报错
// comp([1, 2], [1, 2, 3])
// comp('a', 'b')
// comp(1, 2)  // 报错


// 类型参数的约束采用下面的形式
// <TypeParameter extends ConstraintType>

// 类型参数可以同时设置约束条件和默认值，前提是默认值必须满足约束条件
type Fn<A extends string, B extends string = 'world'> = [A, B]
type Result = Fn<'hello'>
// type Result = ["hello", "world"]
// 上面示例中，类型参数A和B都有约束条件，并且B还有默认值。所以，调用Fn的时候，可以只给出A的值，不给出B的值

// 另外，上例也可以看出，泛型本质上是一个类型函数，通过输入参数，获得结果，两者是一一对应关系
// <T, U extends T>
// <T extends U, U>

// 约束条件不能引用类型参数自身
// <T extends T> 错误



// 使用注意点
// 泛型有一些使用注意点。

// 1.尽量少用泛型
// 泛型虽然灵活，但是会加大代码的复杂性，使其变得难读难写。
// 一般来说，只要使用了泛型，类型声明通常都不太易读，容易写得很复杂。
// 因此，可以不用泛型就不要用。

// 2.类型参数越少越好
// 多一个类型参数，多一道替换步骤，加大复杂性。因此，类型参数越少越好。
function filter<
  T,
  Fn extends (arg: T) => boolean
> (
  arr: T[],
  func: Fn
): T[] {
  return arr.filter(func)
}
// 上面示例有两个类型参数，但是第二个类型参数Fn是不必要的，完全可以直接写在函数参数的类型声明里面。

function filter2<T>(
  arr:T[],
  func:(arg:T) => boolean
): T[] {
  return arr.filter(func);
}

// 3.类型参数需要出现两次。
// 如果类型参数在定义后只出现一次，那么很可能是不必要的。
function greet<Str extends string>(s: Str) {
  console.log('hello, ' + s)
}
// 上面示例中，类型参数Str只在函数声明中出现一次（除了它的定义部分），
// 这往往表明这个类型参数是不必要
function greet1(s:string) {
  console.log('hello, ' + s)
}

// 上面示例把前面的类型参数省略了，效果与前一个示例是一样的。



// 4.泛型可以嵌套
// 类型参数可以是另一个泛型
type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
// 上面示例中，最后一行的泛型OrNull的类型参数，就是另一个泛型OneOrMany。