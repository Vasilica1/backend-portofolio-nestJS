import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './blogs.model';

@Module({
  imports: [ MongooseModule.forFeature([{name: 'Blog', schema: BlogSchema}]) ],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
