const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

exports.createPost = async (req, res) => {
  try {
    console.log("📥 Nhận POST /api/posts");
    console.log("📦 Dữ liệu:", req.body);

    const post = await Post.create(req.body);

    console.log("✅ Đã lưu bài:", post);

    res.status(201).json(post); // 🔥 QUAN TRỌNG NHẤT
  } catch (err) {
    console.error("❌ Lỗi khi tạo post:", err.message);
    res.status(500).json({ error: "Lỗi khi tạo bài viết" });
  }
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Xoá thành công" });
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
};
