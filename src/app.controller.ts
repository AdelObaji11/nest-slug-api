import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { slug } from 'slug-generator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const text = 'Hello Nestjs';
    const slugify = slug(text);
    return slugify;
  }
}
