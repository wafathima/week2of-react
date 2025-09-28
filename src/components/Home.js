import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

function Home() {
  const { blogs } = useContext(BlogContext);

  if(!blogs || blogs.length ===0) return <p>Loading...</p>

  return (
    <div>
      <h1>All Blogs</h1>
      <Link to="/createblog">Create new Blog</Link>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
