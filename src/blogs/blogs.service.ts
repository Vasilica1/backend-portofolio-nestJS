import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from './blogs.model';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';

@Injectable()
export class BlogsService {

  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog> ) {}

  async getAllBlogs() {
    const blogs = await this.blogModel.find().exec();
    return {message: "Blogs fetched succesfully", blogs: blogs} ;
  }

  async createBlogs(title: string, description: string) {
    const newBlog = new this.blogModel ({
      title: title,
      description: description
    })
    const result = await newBlog.save();
    return {message: "Blog added succesfully to the database", blogId: result._id};
  }

  async getSingleBlog(blogId: string) {
    try {
      const blog = await this.blogModel.findById(blogId); 
      const modifiedBlog = {
        id: blog.id,
        title: blog.title,
        description: blog.description
      }
      return modifiedBlog;
    } catch(error) {
      throw new NotFoundException('Could not found the blog');
    }
  }

  async updateBlog(blogId: string, title: string, description: string) {
    let updatedBlog;
    try {
      updatedBlog = await this.blogModel.findById(blogId);  
    } catch(error) {
      throw new NotFoundException('Could not found the blog');
    }
    if(updatedBlog.title) {
      updatedBlog.title = title;
    }
    if(updatedBlog.description) {
      updatedBlog.description = description;
    }
    console.log(updatedBlog);
    updatedBlog.save();
    return {message: "Blog updated"};
  }

  async deleteBlogs(id: string) {
    try {
      await this.blogModel.findByIdAndDelete(id); 
    } catch(error) {
      throw new NotFoundException('Could not found the blog');
    }
    return {message: "Blog deleted succesfully"};
  }
}
