import { createSlice } from "@reduxjs/toolkit";

const Balance = {
  balance: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: { value: Balance },
  reducers: {
    getBalance: (state, action) => {
      state.value.balance = action.payload;
    },
    resetBalance: (state) => {
      state.value.balance = null;
    },
  },
});

export const { resetBalance, getBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
