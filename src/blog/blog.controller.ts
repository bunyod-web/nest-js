import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    HttpCode 
} from "@nestjs/common";
import { BlogService } from "./blog.service";
import { BlogDto } from "./dto/blog.dto";

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}
    

    @HttpCode(200)
    @Get()
    async getAll() {
        return this.blogService.getAllBlogs()
    }


    @HttpCode(201)
    @Post()
    async create(@Body() dto:BlogDto) {
        return this.blogService.create(dto)
    }

    @HttpCode(200)
    @Get(":id")
    async getById(@Param("id") id:"string"){
        return this.blogService.getById(id)
    }
    
    @HttpCode(200)
    @Patch(":id")
    async update(@Param("id") id: string, @Body() dto: BlogDto) {
        return this.blogService.getById(id)
    }

    @HttpCode(200)
    @Delete(":id")
    async delete(@Param("id") id: string){
    return this.blogService.getById(id)
}

}

