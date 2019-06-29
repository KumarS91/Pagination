import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log(post);
  return (
    <div className="container mt-3">
      <h1 className="text-primary mb-4">My Blog</h1>
      <Posts posts={post} loading={loading} />
    </div>
  );
};

export default App;
