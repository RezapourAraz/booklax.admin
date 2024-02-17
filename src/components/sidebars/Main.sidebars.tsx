import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Mui
import { Box, Grid, Typography } from "@mui/material";

const routes = [
  {
    id: 1,
    name: "داشبورد",
    route: "/",
  },
  {
    id: 1,
    name: "بلاگ ها",
    route: "/blogs",
  },
];

const MainSidebar = () => {
  // hooks
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Grid sx={{ bgcolor: "primary.main", height: "calc(100vh - 70px)" }}>
      <Box sx={{ p: 1 }}>
        {routes.map((route) => (
          <Box
            onClick={() => navigate(route.route)}
            sx={{
              p: 1,
              my: 0.5,
              borderRadius: 2,
              bgcolor:
                location.pathname === route.route ? "primary.light" : "initial",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color:
                  location.pathname === route.route
                    ? "initial"
                    : "common.white",
              }}
            >
              {route.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default MainSidebar;
