import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useGetAllBlogsQuery } from "../../redux/blogs/blogs.slice";
import BlogCard from "../../components/cards/Blog.cards";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  // hooks
  const navigate = useNavigate();

  // states
  const limit = 10;
  const page = 1;

  const { data, isLoading } = useGetAllBlogsQuery({ limit, page });

  return (
    <Grid>
      <Grid container sx={{ p: 2, justifyContent: "space-between" }}>
        <Typography variant="h2">لیست بلاگ ها</Typography>
        <Button
          variant="contained"
          sx={{ boxShadow: 0 }}
          onClick={() => navigate("/blogs/add-blog")}
        >
          اضافه کردن
        </Button>
      </Grid>
      <Grid container sx={{ mt: 2 }}>
        {data?.data.map((blog: any) => (
          <Grid item md={3}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogList;
