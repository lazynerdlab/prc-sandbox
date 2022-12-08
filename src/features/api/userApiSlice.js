import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    registerKYC: builder.mutation({
      query: (credentials) => ({
        url: "auth/form",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    verifyKYC: builder.mutation({
      query: (credentials) => ({
        url: "auth/verifykyc",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    signout: builder.query({
      query: () => ({
        url: "auth/logout",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterKYCMutation,
  useVerifyKYCMutation,
  useSignoutQuery,
} = userApiSlice;
