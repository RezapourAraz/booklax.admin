import { apiSlice } from "../api/api.slice";

const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...values },
      }),
    }),
  }),
});

export const { useLoginMutation } = authSlice;
