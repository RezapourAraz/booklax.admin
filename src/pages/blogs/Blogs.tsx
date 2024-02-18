import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import BlogView from "./BlogView";
import CreateBlog from "./CreateBlog";

const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:blogId" element={<BlogView />} />
      <Route path="/add-blog" element={<CreateBlog />} />
    </Routes>
  );
};

export default Blogs;
