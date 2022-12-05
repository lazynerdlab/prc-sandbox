import { createSlice } from "@reduxjs/toolkit";

const Transactions = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState: { value: Transactions },
  reducers: {
    setTransactions: (state, action) => {
      state.value.transactions = action.payload;
    },
  },
});

export default transactionSlice.reducer;
export const { setTransactions } = transactionSlice.actions;
