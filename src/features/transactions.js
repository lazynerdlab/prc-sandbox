import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "./actions.transactions";

const initialStateValue = {
  isLoading: null,
  transctions: [],
  error: "",
};

const transactionsSlice = createSlice({
  name: "transactionsHistory",
  initialState: { value: initialStateValue },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.value.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.value.isLoading = false;
      state.value.transctions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.value.isLoading = false;
      state.value.error = action.error.message;
    });
  },
});

export default transactionsSlice.reducer;
