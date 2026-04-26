import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { SlugService } from './slug.service';
import type { Slug } from './slug.model';

@Controller('slug')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  @Get()
  getAllSlug(): Slug[] {
    return this.slugService.getAllSlug();
  }
  @Get(':id')
  getSlugById(@Param('id', ParseIntPipe) id: number): Slug {
    return this.slugService.getSlugById(id);
  }
  @Post()
  createSlug(@Body('original') original: string): Slug {
    return this.slugService.createSlug(original);
  }
  @Delete(':id')
  deleteSlugById(@Param('id', ParseIntPipe) id: number): Slug {
    return this.slugService.deleteSlugById(id);
  }
}
