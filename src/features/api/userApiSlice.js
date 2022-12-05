import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "Post",
        body: {...credentials}
      }),
    })
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApiSlice;
