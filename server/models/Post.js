// models/Post.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Tiêu đề không được để trống"],
  },
  content: {
    type: String,
    required: [true, "Nội dung không được để trống"],
  },
  image: {
    type: String,
    required: [true, "Link ảnh không được để trống"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);