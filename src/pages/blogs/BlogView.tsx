import React from "react";
import { useLocation } from "react-router-dom";

// Mui
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";

// redux
import { useGetBlogByIdQuery } from "../../redux/blogs/blogs.slice";

// icons
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            bgcolor: "primary.light",
            p: 2,
          }}
        >
          <Typography variant="h2">نمایش بلاگ</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: "success.main" }}>
              <FaCheck />
            </IconButton>
            <IconButton sx={{ color: "error.main" }}>
              <IoClose />
            </IconButton>
          </Box>
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
