import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SlugService } from './slug.service';
import type { Slug } from './slug.model';

@Controller('slug')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  @Post()
  createSlug(@Body('original') original: string): Slug {
    return this.slugService.createSlug(original);
  }
  @Get()
  getAllSlug(): Slug[] {
    return this.slugService.getAllSlug();
  }
  @Get(':id')
  getSlugById(@Param('id') id: number): Slug {
    return this.slugService.getSlugById(id);
  }
  @Delete(':id')
  deleteSlugById(@Param('id') id: number): Slug {
    return this.slugService.deleteSlugById(id);
  }
}
