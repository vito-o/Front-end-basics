import { Controller, Get, Post, Query, Header, Body, HostParam, HttpException, HttpStatus, UseFilters, ForbiddenException, Param, ParseIntPipe, ParseUUIDPipe, UsePipes, UseInterceptors } from '@nestjs/common';
import { CatsTypeDto } from './create-cats-type.dto'
import { CatsService } from './cats.service'
import { Cat } from './cat.interface';
import { ValidationPipe } from '../validation/validation.pipe'
import { JoiValidationPipe } from '../validation/joiValidation.pipe'
import { LoggingInterceptor } from '../interceptor/logging.interceptor'
import { TransformInterceptor } from '../interceptor/transform.interceptor'
import { ExcludeNullInterceptor } from '../interceptor/excludeNull.interceptor'
import { CacheInterceptor } from '../interceptor/cache.interceptor'
import { TimeoutInterceptor } from '../interceptor/timeout.interceptor'

// import { HttpExceptionFilter } from '../exception/http-exception.filter'

//带有单个路由的基本控制器
@Controller('cats')
@UseInterceptors(TimeoutInterceptor)
export class CatsController {
  constructor(private catsService: CatsService){}

  /* @Get('findAll')
  @Header('Cache-Control', 'none')
  findAll(@Query("name") name: String): string {
    console.log(name, 'name')
    return "this action returns all cats";
  } */

  /* @Post('createCatsType')
  createCatsType(@Body() catsTypeDto: CatsTypeDto) {
    const { name, age, breed } = catsTypeDto

    console.log('body DTO ========&gt;', name, age, breed)
    return '新建一个挂件类型'
  } 

  @Get('getInfo')
  getInfo(@HostParam('account') account: string) {
    return account;
  }

  @Post('create')
  // @UseFilters(new HttpExceptionFilter())
  async create(@Body() catsTypeDto: CatsTypeDto) {
    throw new ForbiddenException()
    // this.catsService.create(catsTypeDto)
  }

  @Get('findAll')
  async findAll():Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Get('exception')
  async exception() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message'
    }, HttpStatus.FORBIDDEN)
  } */

  @Get('findOne')
  async findOne(@Query('uuid', ValidationPipe) uuid: string) {
    console.log(uuid, 'uuid')
    await this.time()
    // return this.catsService.findOne(id);
    return null
  }

  time() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 8000)
    })
  }

  /* @Post('create')
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() catsTypeDto: CatsTypeDto) {
    this.catsService.create(catsTypeDto)
  } */

}
