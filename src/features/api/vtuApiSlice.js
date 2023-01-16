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
      invalidatesTags: ["balance", "transactions"],
    }),
    vtuAirtime: builder.mutation({
      query: (credentials) => ({
        url: "vtu/purchaseairtime",
        method: "Post",
        body: { ...credentials },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
    vtuData: builder.mutation({
      query: (credentials) => ({
        url: "vtu/purchasedata",
        method: "Post",
        body: { ...credentials },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
    vtuElectricity: builder.mutation({
      query: (credentials) => ({
        url: "vtu/electricity",
        method: "Post",
        body: { ...credentials },
      }),
      invalidatesTags: ["balance", "transactions"],
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
