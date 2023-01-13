import { apiSlice } from "./apiSlice";

export const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (id) => ({
        url: `transaction/history/${id}`,
      }),
      providesTags: (id) => [{ type: "transactions", id }],
    }),
    transfer: builder.mutation({
      query: (amount) => ({
        url: "transaction/internal/transfer",
        method: "Put",
        body: { amount },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
    fund: builder.mutation({
      query: (credentials) => ({
        url: "transaction/fund",
        method: "Post",
        body: { ...credentials },
      }),
      invalidatesTags: ["balance", "transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery, useTransferMutation, useFundMutation } =
  transactionsApiSlice;
