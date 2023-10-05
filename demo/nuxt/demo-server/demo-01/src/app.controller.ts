import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('count')
  count() {
    console.log('rount  running...')
    return {
      name: 'zhangsan',
      age: 18
    }
  }
}
