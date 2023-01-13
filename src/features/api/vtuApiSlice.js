import { apiSlice } from "./apiSlice";

export const vtuApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    vtuVerifyUser: builder.mutation({
      query: (credentials) => ({
        url: "vtu/verifycustomer",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    vtuCableTv: builder.mutation({
      query: (credentials) => ({
        url: "vtu/cabletv",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    vtuAirtime: builder.mutation({
      query: (credentials) => ({
        url: "vtu/purchaseairtime",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    vtuData: builder.mutation({
      query: (credentials) => ({
        url: "vtu/purchasedata",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    vtuElectricity: builder.mutation({
      query: (credentials) => ({
        url: "vtu/electricity",
        method: "Post",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useVtuAirtimeMutation,
  useVtuCableTvMutation,
  useVtuVerifyUserMutation,
  useVtuDataMutation,
  useVtuElectricityMutation,
} = vtuApiSlice;
