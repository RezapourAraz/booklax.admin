import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetAllBlogsQuery } from "../../redux/blogs/blogs.slice";
import BlogCard from "../../components/cards/Blog.cards";

const BlogList = () => {
  const limit = 10;
  const page = 1;

  const { data, isLoading } = useGetAllBlogsQuery({ limit, page });

  return (
    <Grid>
      <Grid sx={{ p: 2 }}>
        <Typography variant="h2">لیست بلاگ ها</Typography>
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
