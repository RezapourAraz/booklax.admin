import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetAllBlogsQuery } from "../../redux/blogs/blogs.slice";
import BlogCard from "../../components/cards/Blog.cards";

const Blogs = () => {
  const limit = 10;
  const page = 1;

  const { data, isLoading } = useGetAllBlogsQuery({ limit, page });

  return (
    <Grid>
      <Grid sx={{ p: 2, borderRadius: 2, bgcolor: "primary.light" }}>
        <Typography variant="h2">بلاگ ها</Typography>
      </Grid>
      <Grid sx={{ mt: 2 }}>
        {data.data.map((blog: any) => (
          <BlogCard blog={blog} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Blogs;
