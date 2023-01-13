import { apiSlice } from "./apiSlice";

export const flutterwaveApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // fetchBanks: builder.query({
    //   query: () => ({
    //     url: "flutterwave/GetBanks",
    //   }),
    // }),
    fetchAccountName: builder.mutation({
      query: (credentials) => ({
        url: "flutterwave/accountdetails",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    verifYBvn: builder.mutation({
      query: (bvn) => ({
        url: "flutterwave/bvndetails",
        method: "Post",
        body: { ...bvn },
      }),
    }),
    othertransfer: builder.mutation({
      query: (credentials) => ({
        url: "flutterwave/banktransfer",
        method: "Post",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useFetchAccountNameMutation,
  useVerifYBvnMutation,
  useOthertransferMutation,
} = flutterwaveApiSlice;
