import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

const MainHeader = () => {
  return (
    <Grid sx={{ height: 80, p: 2 }}>
      <Grid>
        <Typography variant="h5">بوکلاکس</Typography>
      </Grid>
      <Grid>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};

export default MainHeader;
