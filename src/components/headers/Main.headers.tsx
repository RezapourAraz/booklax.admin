import React from "react";

// hooks
import { useAppSelector } from "../../hooks/reduxHooks";

// Mui
import { Avatar, Grid, Typography } from "@mui/material";
import { displayGreeting } from "../../helper/greeting";

const MainHeader = () => {
  // selector
  const { user } = useAppSelector((state) => state.auth);

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
        <Grid sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {displayGreeting()}
          <Typography>{user.username}</Typography>
          <Avatar src={user.profile} alt={user.username} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainHeader;
