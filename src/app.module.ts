import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlugModule } from './slug/slug.module';

@Module({
  imports: [SlugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
