// src/components/BlogEditor.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/postAPI"; // Import service

function BlogEditor() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPost({
        title,
        image,
        content,
        likes: 0,
      });

      alert("Đăng bài thành công!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi đăng bài:", error);
      alert("Đã có lỗi xảy ra, không thể đăng bài.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Link ảnh"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <textarea
        placeholder="Nội dung"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Đăng bài</button>
    </form>
  );
}

export default BlogEditor;
