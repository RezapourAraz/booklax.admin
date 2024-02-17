import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ blog }: any) => {
  return (
    <Grid
      sx={{ m: 2, bgcolor: "common.white", cursor: "pointer", borderRadius: 1 }}
    >
      <Box sx={{ height: 250 }}>
        <img
          width="100%"
          height="100%"
          src={`https://arazdev.storage.iran.liara.space/api/v1/blogs/${blog.thumbnail}`}
          alt={blog.title}
          style={{ borderRadius: 4 }}
        />
      </Box>
      <Grid sx={{ p: 1 }}>
        <Box>
          <Typography sx={{ p: 1 }} variant="h4">
            {blog.title}
          </Typography>
          <Typography sx={{ p: 1 }} variant="subtitle1">
            {blog.content}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            {new Date(blog.created_at).toLocaleDateString("fa-IR")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
