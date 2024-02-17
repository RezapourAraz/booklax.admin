import React from "react";
import { useLocation } from "react-router-dom";

// Mui
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useGetBlogByIdQuery } from "../../redux/blogs/blogs.slice";

const BlogView = () => {
  // Hooks
  const location = useLocation();
  // url
  const id = decodeURIComponent(location.pathname).split("/")[2].split("-")[0];

  const { data, isLoading, isSuccess } = useGetBlogByIdQuery({ id });

  const blog = isSuccess && data.data;

  if (isLoading) {
    return (
      <Box>
        <Typography>Loading</Typography>
      </Box>
    );
  } else {
    return (
      <Grid>
        <Box>
          <Typography variant="h2">نمایش بلاگ</Typography>
        </Box>
        <Grid>
          <Box
            sx={{
              height: 500,
              backgroundImage: `url(https://arazdev.storage.iran.liara.space/api/v1/blogs/${blog?.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ p: 1 }}>
              <Typography variant="h5">
                {new Date(blog?.created_at).toLocaleDateString("fa-IR")}
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ p: 1 }}>
              <Typography variant="h5">{blog?.username}</Typography>
            </Box>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h3">{blog?.title}</Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </Box>
        </Grid>
      </Grid>
    );
  }
};

export default BlogView;
