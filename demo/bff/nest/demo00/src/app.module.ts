import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module'
import { LoggerMiddleware } from './middleware/logger.middleware'
import { APP_FILTER } from '@nestjs/core'
import { HttpExceptionFilter } from './exception/http-exception.filter';

//应用程序的跟模块
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  }],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats')
  }
}
