import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { slug } from 'slug-generator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const test = 'Hello nestjs';
    const slugify = slug(test);
    console.log(slugify);
    return this.appService.getHello();
  }
}
