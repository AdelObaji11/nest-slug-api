import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SlugService } from './slug.service';
import type { Slug } from './slug.model';

@Controller('slug')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  // create slug
  @Post()
  createSlug(@Body('original') newSlug: string): Slug {
    return this.slugService.createSlug(newSlug);
  }
  // get all slug
  @Get()
  getAllSlug(): Slug[] {
    return this.slugService.getAllSlug();
  }
  // get slug by id
  @Get(':id')
  getSlugById(@Param('id') id: string): Slug {
    return this.slugService.getSlugById(Number(id));
  }
  @Delete(':id')
  deleteSlugById(@Param('id') id: string): Slug {
    return this.slugService.deleteSlugById(Number(id));
  }
}
