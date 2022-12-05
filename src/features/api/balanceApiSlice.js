import { apiSlice } from "./apiSlice";

export const balanceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => ({
        url: "/balance",
      }),
      providesTags: (id) => [{ type: "balance", id }],
    })
  }),
});

export const { useGetBalanceQuery } =
  balanceApiSlice;
