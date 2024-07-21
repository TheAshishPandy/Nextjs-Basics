import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true }); 

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
