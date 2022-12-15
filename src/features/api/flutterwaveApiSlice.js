import { apiSlice } from "./apiSlice";

export const flutterwaveApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchBanks: builder.query({
      query: () => ({
        url: "flutterwave/GetBanks",
      }),
    }),
    fetchBankName: builder.mutation({
      query: (credentials) => ({
        url: "flutterwave/resolveAccount",
        method: "Post",
        body: { ...credentials },
      }),
    }),
    verifYBvn: builder.mutation({
      query: (bvn) => ({
        url: "flutterwave/verifyBvn",
        method: "Post",
        body: { ...bvn },
      }),
    }),
  }),
});

export const {
  useFetchBanksQuery,
  useFetchBankNameMutation,
  useVerifYBvnMutation,
} = flutterwaveApiSlice;
