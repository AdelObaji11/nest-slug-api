import { Injectable, NotFoundException } from '@nestjs/common';
import type { Slug } from './slug.model';
import { slug } from 'slug-generator';

@Injectable()
export class SlugService {
  private slugs: Slug[] = [];
  private counterId = 0;

  getAllSlug(): Slug[] {
    return this.slugs;
  }

  createSlug(newslug: string): Slug {
    this.counterId++;

    const newSlug: Slug = {
      id: this.counterId + 1,
      original: newslug,
      slug: slug(newslug),
    };
    this.slugs.push(newSlug);
    return newSlug;
  }

  getSlugById(id: number): Slug {
    const slugEntity = this.slugs.find((slugData) => slugData.id === id);
    if (!slugEntity) throw new NotFoundException('slug is not found');
    return slugEntity;
  }

  deleteSlugById(id: number): Slug {
    const deleteSlug = this.slugs.find((slug) => slug.id === id);
    if (!deleteSlug) throw new NotFoundException('slug is not found');
    this.slugs = this.slugs.filter((slug) => slug.id !== id);
    return deleteSlug;
  }
}
