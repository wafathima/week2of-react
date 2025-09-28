import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";
import Home from "./components/Home";

function App(){
  return (
    <BlogProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<BlogDetail/>}/>
        <Route path="/createblog" element={<CreateBlog/>}/>
        <Route path="/editblog/:id" element={<EditBlog/>}/>
      </Routes>
      </BrowserRouter>
    </BlogProvider>
  )
}
export default App;