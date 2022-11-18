import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { Apis } from "../utils/fetchData";

const Balance = {
  isFetching: null,
  balance: "",
  error: "",
};

// export const fetchBalance = createAction("balance/fetchBalance", (data) => {
//   console.log("executed", Balance, data);
//   const newUsers = { isFetching: false, balance: data, error: "none" };
//   return newUsers;
// });

export const increaseBalance = createAsyncThunk(
  "balance/increaseBalance",
  async (data) => {
    try {
      const res = await Apis("put", "transaction", data);
      return res.data.balance;
    } catch (error) {
      console.log(error);
    }
  }
);

export const decreaseBalance = createAsyncThunk(
  "balance/decreaseBalance",
  async (data) => {
    try {
      const res = await Apis("put", "transaction", data);
      return res.data.balance;
    } catch (error) {
      console.log(error);
    }
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState: { value: Balance },
  reducers: {
    fetchBalance: (state, action) => {
      state.value.balance = action.payload;
      state.value.isFetching = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increaseBalance.pending, (state) => {
      state.value.isFetching = true;
    });
    builder.addCase(increaseBalance.fulfilled, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = action.payload;
      state.value.error = "";
    });
    builder.addCase(increaseBalance.rejected, (state, action) => {
      state.value.isFetching = false;
      state.value.balance = Balance;
      state.value.error = action.payload;
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
      state.value.balance = Balance;
      state.value.error = action.payload;
    });
  },
});

export const { fetchBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
