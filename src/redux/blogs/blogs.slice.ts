import { apiSlice } from "../api/api.slice";

const blogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: ({ limit, page }) => {
        const baseURL = "/admin/blogs";

        const searchParams = new URLSearchParams();

        if (limit) {
          searchParams.set("limit", limit);
          searchParams.set("page", page);
        }

        const requestURL = `${baseURL}${
          searchParams.toString() ? `?${searchParams.toString()}` : ""
        }`;

        return {
          url: requestURL,
        };
      },
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogSlice;