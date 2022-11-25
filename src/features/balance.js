import { createSlice } from "@reduxjs/toolkit";
import { fundBalance, updateBalance, decreaseBalance } from "./actions.balance";

const Balance = {
  isFetching: null,
  balance: 5000,
  error: "",
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: { value: Balance },
  reducers: {
    resetBalance: (state) => {
      state.value = Balance;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fundBalance.pending, (state) => {
      state.value.isFetching = true;
    });
    builder.addCase(fundBalance.fulfilled, (state) => {
      state.value.isFetching = false;
    });
    builder.addCase(fundBalance.rejected, (state) => {
      state.value.isFetching = false;
    });
    builder.addCase(decreaseBalance.pending, (state) => {
      state.value.isFetching = true;
    });
    builder.addCase(decreaseBalance.fulfilled, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = action.payload;
      state.value.error = "";
    });
    builder.addCase(decreaseBalance.rejected, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = Balance.balance;
      state.value.error = action.payload;
    });
    builder.addCase(updateBalance.pending, (state) => {
      state.value.isFetching = true;
    });
    builder.addCase(updateBalance.fulfilled, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = action.payload;
      state.value.error = "";
    });
    builder.addCase(updateBalance.rejected, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = Balance.balance;
      state.value.error = action.payload;
    });
  },
});

export const { resetBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
