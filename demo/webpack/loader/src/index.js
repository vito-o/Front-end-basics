// console.log('hello')

class Person {
  constructor(name){
    this.setName(name)
  }

  setName(name){
    this.name = name;
  }
}

console.log(new Person('aaa'))