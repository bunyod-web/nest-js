import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'bunyod', // PostgreSQL foydalanuvchi nomi
      password: 'bunyod123', // PostgreSQL paroli
      database: 'my_database', // Ma'lumotlar bazasi nomi
      entities: [Blog], // Entity sifatida 'Blog'ni ko'rsatamiz
      synchronize: true, // Ma'lumotlar bazasini avtomatik yaratish yoki yangilash
    }),
    BlogModule, // Blog modulini qo'shamiz
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
