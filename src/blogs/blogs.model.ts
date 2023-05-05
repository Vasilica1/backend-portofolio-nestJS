import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: {type: String, require: true},
  description: {type: String, require: true}
})

export interface Blog {
  id: string,
  title: string,
  description: string,
}

