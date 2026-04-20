import { Injectable, NotFoundException } from '@nestjs/common';
import type { Slug } from './slug.model';
import { slug } from 'slug-generator';

@Injectable()
export class SlugService {
  private slugs: Slug[] = [];
  public counterId = this.slugs.length;
  getAllSlug(): Slug[] {
    return this.slugs;
  }
  createSlug(newslug: string): Slug {
    const createdSlug: Slug = {
      id: this.counterId + 1,
      original: newslug,
      slug: slug(newslug),
    };
    this.slugs.push(createdSlug);
    return createdSlug;
  }
  getSlugById(found: number): Slug {
    const foundSlug = this.slugs.find((p) => p.id === found);
    if (!foundSlug) throw new NotFoundException('slug is not found');
    return foundSlug;
  }
  deleteSlugById(del: number): string {
    const deleteSlug = this.slugs.find((p) => p.id === del);
    if (!deleteSlug) throw new NotFoundException('slug is not found');
    this.slugs = this.slugs.filter((item) => item.id !== del);
    return `Deleted The Slug id ${deleteSlug.id} successfully`;
  }
}
