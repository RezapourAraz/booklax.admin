import React, { FC, ReactNode } from "react";

// Mui
import { Box, Grid } from "@mui/material";
import MainHeader from "../components/headers/Main.headers";

// types
type MainLayoutsProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

const MainLayouts: FC<MainLayoutsProps> = ({ children, sidebar }) => {
  return (
    <Grid>
      <MainHeader />
      <Grid container>
        <Grid item md={2}>
          {sidebar}
        </Grid>
        <Grid
          item
          md={10}
          sx={{
            overflowY: "auto",
            height: "calc(100vh - 70px)",
            bgcolor: "primary.light",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayouts;
