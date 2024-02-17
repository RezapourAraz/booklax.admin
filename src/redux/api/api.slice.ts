import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "./../store";
import { logOut, setUser } from "../auth/auth.reducer";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5005/api/v1",
  credentials: "omit",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult: any = await baseQuery(
      {
        url: "/refreshToken",
        method: "POST",
        body: { refreshToken: (api.getState() as RootState).auth.refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(setUser({ ...refreshResult.data?.data, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
