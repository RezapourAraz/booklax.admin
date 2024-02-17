import React from "react";

// Mui
import { Box, Button, Grid, Input, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useLoginMutation } from "../../redux/auth/auth.slice";
import { setUser } from "../../redux/auth/auth.reducer";
import { useLoginForm } from "../../hooks/formik";

const Login = () => {
  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [Login, isSuccess] = useLoginMutation();
  const submitHandler = async () => {
    try {
      const { data }: any = await Login(values);

      if (data.code === 200) {
        dispatch(setUser(data.data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { values, handleChange, handleSubmit } = useLoginForm(submitHandler);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "grey.100",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{
          p: 3,
          width: 400,
          border: 1,
          borderRadius: 1,
          borderColor: "grey.300",
        }}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Box>
          <Input
            name="email"
            fullWidth
            placeholder="ایمیل*"
            value={values.email}
            onChange={handleChange}
            sx={{
              color: "common.black",
              bgcolor: "grey.300",
              p: 1,
              borderRadius: 1,
            }}
          />
        </Box>
        <Box my={2}>
          <Input
            name="password"
            fullWidth
            placeholder="رمز عبور*"
            type="password"
            value={values.password}
            onChange={handleChange}
            sx={{
              color: "common.black",
              bgcolor: "grey.300",
              p: 1,
              borderRadius: 1,
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ color: "common.white", p: 1 }}
          >
            ورود
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
