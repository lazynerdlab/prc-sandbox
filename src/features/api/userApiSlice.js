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
        url: "auth/signup",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    registerKYC: builder.mutation({
      query: (credentials) => ({
        url: "verify/setupkyc",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    verifyEmail: builder.mutation({
      query: (credentials) => ({
        url: "verify/verify",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    signout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "Post",
        body: {},
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterKYCMutation,
  useVerifyEmailMutation,
  useSignoutMutation,
} = userApiSlice;
