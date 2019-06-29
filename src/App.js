import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(false);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(true);
    };
    fetchPosts();
  }, []);
  console.log(post);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
