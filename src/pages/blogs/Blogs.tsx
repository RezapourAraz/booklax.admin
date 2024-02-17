import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import BlogView from "./BlogView";

const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:blogId" element={<BlogView />} />
    </Routes>
  );
};

export default Blogs;
