import React, { FC, ReactNode } from "react";

// Mui
import { Box, Grid } from "@mui/material";
import MainHeader from "../components/headers/Main.headers";

// types
type MainLayoutsProps = {
  children: ReactNode;
};

const MainLayouts: FC<MainLayoutsProps> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default MainLayouts;
