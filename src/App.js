import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mt-3">
      <h1 className="text-primary mb-4">Sample Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        totalPosts={post.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
