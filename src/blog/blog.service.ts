// src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>,
    ) {}

    async getAllBlogs() {
        return await this.blogRepository.find();
    }

    async create(dto: BlogDto) {
        const blog = this.blogRepository.create(dto);
        return await this.blogRepository.save(blog);
    }

    async getById(id: string) {
        return await this.blogRepository.findOneBy({ id: Number(id) });
    }

    async update(id: string, dto: BlogDto) {
        await this.blogRepository.update(id, dto);
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.blogRepository.delete(id);
    }
}
