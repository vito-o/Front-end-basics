import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  constructor() {
    this.cats.push({
      name: 'zhangsan',
      age: 15,
      breed: '12321'
    })
  }

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[]{
    return this.cats;
  }

  findOne(age:number):Cat {
    return this.cats.find(o => o.age == age)
  }

}