import React from "react";

// Mui
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";

const MainHeader = () => {
  return (
    <Grid
      container
      sx={{
        height: 70,
        p: 2,
        boxShadow: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid>
        <Typography variant="h2">بوکلاکس</Typography>
      </Grid>

      <Grid>
        <Grid>
          <Avatar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainHeader;
