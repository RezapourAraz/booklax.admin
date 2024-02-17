import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken } = action.payload;

      state.user = action.payload;
      state.token = accessToken;
      state.refreshToken = refreshToken;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setUser, logOut } = authReducer.actions;
