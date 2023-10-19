import { Controller, Get, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('count')
  count(@Headers() head) {
    console.log(head)
    console.log('rount  running...')
    return {
      name: 'zhangsan',
      age: 18
    }
  }
}
