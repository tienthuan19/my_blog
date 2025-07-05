import { useState } from "react";
import axios from "axios";

function BlogCard({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    axios.patch(`http://localhost:3001/api/posts/like/${post._id}`, {
    likes: likes + 1,
    });

    setLikes(likes + 1);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", background: "#e6f0ff" }}>
      <img src={post.image} alt="blog" style={{ width: "100%", height: "auto" }} />
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleLike}>❤️ {likes}</button>
    </div>
  );
}

export default BlogCard;
