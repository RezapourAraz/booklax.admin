import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <Grid container sx={{ my: 1 }}>
      <Box sx={{ width: 200, height: 200 }}>
        <img
          width="100%"
          src={`https://arazdev.storage.iran.liara.space/api/v1/blogs/${blog.thumbnail}`}
          alt={blog.title}
        />
      </Box>
      <Grid>
        <Box>
          <Typography sx={{ p: 1 }} variant="h3">
            {blog.title}
          </Typography>
          <Typography sx={{ p: 1 }} variant="h3">
            {blog.content}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {new Date(blog.created_at).toLocaleDateString("fa-IR")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
