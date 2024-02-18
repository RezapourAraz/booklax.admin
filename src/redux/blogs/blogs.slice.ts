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

    getBlogById: builder.query({
      query: ({ id }) => ({
        url: `/admin/blogs/${id}`,
      }),
    }),
    acceptOrReject: builder.mutation({
      query: ({ isVerified, id }) => ({
        url: `/admin/blogs/verify/${id}`,
        method: "PATCH",
        body: { isVerified },
      }),
    }),
    createBlog: builder.mutation({
      query: ({ body, file }) => {
        const formData = new FormData();

        for (const key in body) {
          formData.append(key, body[key]);
        }

        if (file) {
          formData.append("file", file);
        }

        return {
          url: `admin/blogs/verify/${body.id}`,
          method: "patch",
          body: formData,
          formData: true,
        };
      },
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useAcceptOrRejectMutation,
  useCreateBlogMutation,
} = blogSlice;
