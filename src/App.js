import axios from "axios";
import "./App.css";
import Post from "./components/Post";
import Pagination from "./components/Pagination";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // get current posts
  
  // first method
  // const lastIndex = currentPage * postsPerPage;
  // const firstIndex = lastIndex  - postsPerPage;
  // const currentPost = posts.slice(firstIndex t,lastIndex);

  // second method
  const firstIndex = (currentPage - 1) * postsPerPage;
  const lastIndex = firstIndex + postsPerPage;
  const currentPost = posts.slice(firstIndex, lastIndex);

  // change page
  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= posts.length / postsPerPage &&
      currentPage !== pageNumber
    )
      setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <h1 className="flex justify-center items-center text-2xl font-bold my-4">
        My Posts
      </h1>
      <Post posts={currentPost} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
