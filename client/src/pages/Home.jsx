import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getPosts } from '../api/postAPI.js';


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      <h1>📰 Danh sách bài viết</h1>
      {posts.length === 0 ? (
        <p>😥 Chưa có bài nào hết...</p>
      ) : (
        posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}

export default Home;
