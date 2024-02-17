import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./auth/auth.reducer";
import { apiSlice } from "./api/api.slice";

const rootReducer = combineReducers({
  api: apiSlice.reducer,
  [authReducer.name]: authReducer.reducer,
});

export default rootReducer;
