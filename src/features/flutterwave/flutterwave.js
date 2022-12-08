import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/////https://cors-anywhere.herokuapp.com/
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.flutterwave.com/v3",
  prepareHeaders: (headers) => {
    const token = "FLWSECK_TEST-caefa80b6553badc17b686b14403cfe4-X";
    return headers.set("Authorization", `Bearer ${token}`);
  },
});

export const flutterwaveApiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    fetchBanks: builder.query({
      query: () => ({
        url: "banks/NG",
      }),
    }),
    fetchBankName: builder.mutation({
      query: (credentials) => ({
        url: "accounts/resolve",
        method: "Post",
        body: {...credentials},
      }),
    }),
    verifYBvn: builder.query({
      query: (bvn) => ({
        url: `kyc/bvns/${bvn}`,
      }),
    }),
  }),
});

export const {
  useFetchBanksQuery,
  useFetchBankNameMutation,
  useVerifYBvnQuery,
} = flutterwaveApiSlice;
