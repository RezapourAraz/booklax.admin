import React from "react";

// Mui
import { Button, Grid, Input, Typography } from "@mui/material";

const CreateBlog = () => {
  return (
    <Grid sx={{ p: 2, bgcolor: "common.white", borderRadius: 2 }}>
      <Grid sx={{ p: 2 }}>
        <Typography sx={{ p: 1 }}>سربرگ</Typography>
        <Input
          fullWidth
          disableUnderline
          sx={{ px: 1, p: 0.5, bgcolor: "primary.light", color: "grey.600" }}
        />
      </Grid>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item md={6} sx={{ my: 1, p: 2, alignItems: "center" }}>
          <Typography sx={{ p: 1 }}>زمان مطالعه</Typography>
          <Input
            fullWidth
            disableUnderline
            sx={{ px: 1, p: 0.5, bgcolor: "primary.light", color: "grey.600" }}
            type="number"
          />
        </Grid>
        <Grid item md={6} sx={{ my: 1, p: 2, alignItems: "center" }}>
          <Typography sx={{ p: 1 }}>بند انگشتی</Typography>
          <Input
            fullWidth
            disableUnderline
            sx={{ px: 1, p: 0.5, bgcolor: "primary.light", color: "grey.600" }}
            type="file"
          />
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button variant="contained" sx={{ boxShadow: 0 }}>
          اضافه کردن
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateBlog;
