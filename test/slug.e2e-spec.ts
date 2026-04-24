import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('SlugController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('POST /slug - should create slug', () => {
    return request(app.getHttpServer())
      .post('/slug')
      .send({ original: 'Hello World' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('slug');
      });
  });

  it('/GET /slug - should return all slug', () => {
    return request(app.getHttpServer())
      .get('/slug')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  type SlugResponse = {
    id: string;
    originsl: string;
    slug: string;
  };

  it('/GET /slug/:id - should return one slug', async () => {
    const createRes = await request(app.getHttpServer())
      .post('/slug')
      .send({ original: 'Test Slug' });

    const body = createRes.body as SlugResponse;
    const id = body.id;

    return request(app.getHttpServer())
      .get(`/slug/${id}`)
      .expect(200)
      .expect((res) => {
        const body = res.body as SlugResponse;
        expect(body.id).toBe(id);
      });
  });

  it('DELETE /slug/:id - should delete slug', async () => {
    const createRes = await request(app.getHttpServer())
      .post('/slug')
      .send({ original: 'Delete Me' });
    const body = createRes.body as SlugResponse;
    const id = body.id;

    return request(app.getHttpServer())
      .delete(`/slug/${id}`)
      .expect(200)
      .expect((res) => {
        const body = res.body as SlugResponse;
        expect(body.id).toBe(id);
      });
  });
  afterEach(async () => {
    await app.close();
  });
});
