import React, { useState } from "react";

// Mui
import { Button, Grid, Input, Typography, styled } from "@mui/material";

import { Editor } from "@tinymce/tinymce-react";
import TextEditorInput from "../../components/inputs/TextEditor.inputs";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateBlog = () => {
  // state
  const [image, setImage] = useState<null | File>(null);
  const [content, setContent] = useState();

  // handle
  const handleFile = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleChangeText = (e: any) => {
    setContent(e);
  };

  console.log(image);

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
          <Button
            fullWidth
            component="label"
            role={undefined}
            tabIndex={-1}
            sx={{ p: image ? 1 : 2.5 }}
          >
            {image ? image?.name : ""}
            <VisuallyHiddenInput type="file" onChange={handleFile} />
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <TextEditorInput
          value={content}
          onChange={(e: any) => handleChangeText(e)}
        />
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
