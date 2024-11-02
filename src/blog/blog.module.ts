import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Blog } from './entities/blog.entities';
@Module({
  imports: [TypeOrmModule.forFeature([Blog])], // Entity'ni ulash
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
