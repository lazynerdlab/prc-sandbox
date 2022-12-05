import { apiSlice } from "./apiSlice";

export const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (id) => ({
        url: `/history/${id}`,
      }),
      providesTags: (id) => [{ type: "transactions", id }],
    }),
    transfer: builder.mutation({
      query: (amount) => ({
        url: "/transfer",
        method: "Post",
        body: { amount },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
    fund: builder.mutation({
      query: (credentials) => ({
        url: "/fund",
        method: "Post",
        body: { ...credentials },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery, useTransferMutation, useFundMutation } = transactionsApiSlice;
