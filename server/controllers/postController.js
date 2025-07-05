const postService = require("../services/postService");

exports.getPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi tạo bài viết" });
  }
};

exports.updatePost = async (req, res) => {
  const post = await postService.updatePost(req.params.id, req.body);
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await postService.deletePost(req.params.id);
  res.json({ message: "Xoá thành công" });
};

exports.likePost = async (req, res) => {
  const post = await postService.likePost(req.params.id);
  res.json(post);
};
