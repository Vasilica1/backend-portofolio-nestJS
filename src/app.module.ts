import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogsModule,
    MongooseModule.forRoot('mongodb+srv://vasilecernovschi7835:pAK9HJQ4De5dpeSD@portofolio-nestjs.pfparj8.mongodb.net/portofolio-nestJs?retryWrites=true&w=majority')]
})
export class AppModule {}
