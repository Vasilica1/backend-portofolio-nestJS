import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blogs.model';

@Controller('/api/blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async getAllBlogs(): Promise<{message: string, blogs: Blog[]}> {
    const blogs = await this.blogsService.getAllBlogs();
    return blogs;
  }

  @Post()
  async createNewBlogs(
    @Body('title') blogTitle: string, 
    @Body('description') blogDescription: string
  ) {
    const generatedId = await this.blogsService.createBlogs(blogTitle, blogDescription);
    return generatedId;
  }

  @Get(':id')
  async getBlog(@Param('id') id: string) {
    const singleBlog = await this.blogsService.getSingleBlog(id);
    console.log(singleBlog);
    return singleBlog;
  }

  @Patch(':id')
  async updateBlogs(
    @Param('id') id: string,
    @Body('title') blogTitleUpdate: string, 
    @Body('description') blogDescriptionUpdate: string) {
    const message = await this.blogsService.updateBlog(id, blogTitleUpdate, blogDescriptionUpdate);
    return message;
  }

  @Delete(':id')
  async deleteBlogs(@Param('id') id: string) {
    const message = await this.blogsService.deleteBlogs(id);
    return message;
  }
}

