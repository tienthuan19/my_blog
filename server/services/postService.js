// services/post.service.js
const Post = require("../models/Post");

exports.createPost = async (data) => {
  // Business logic: có thể validate, thêm timestamp,...
  const post = await Post.create({
    ...data,
    createdAt: new Date(),
  });

  return post;
};

exports.getAllPosts = async () => {
  return await Post.find().sort({ createdAt: -1 });
};

exports.updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

exports.likePost = async (id) => {
  const post = await Post.findById(id);
  post.likes += 1;
  return await post.save();
};
