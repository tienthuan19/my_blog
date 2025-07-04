const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./models/Post");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Đã kết nối MongoDB!");

    // Xoá toàn bộ dữ liệu cũ
    await Post.deleteMany();

    // Thêm bài viết mẫu
    const samplePosts = [
      {
        title: "🔥 Bài viết đầu tiên",
        image: "https://picsum.photos/seed/first/800/400",
        content: "Đây là nội dung của bài viết đầu tiên. Rất thú vị và đầy cảm hứng!",
        likes: 3,
      },
      {
        title: "🌟 Bài viết thứ hai",
        image: "https://picsum.photos/seed/second/800/400",
        content: "Nội dung bài viết này cực kỳ hay ho. Nên đọc nha!",
        likes: 5,
      },
      {
        title: "🎯 Bài viết cuối cùng",
        image: "https://picsum.photos/seed/third/800/400",
        content: "Bài viết cuối nhưng không kém phần hấp dẫn đâu.",
        likes: 1,
      },
    ];

    await Post.insertMany(samplePosts);
    console.log("Thêm bài viết mẫu thành công!");

    process.exit();
  })
  .catch((err) => {
    console.error("Lỗi kết nối MongoDB:", err);
    process.exit(1);
  });
