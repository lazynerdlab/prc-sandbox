import { apiSlice } from "./apiSlice";

export const balanceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => ({
        url: "transaction/balance",
      }),
      providesTags: ["balance"],
    }),
  }),
});

export const { useGetBalanceQuery } = balanceApiSlice;
