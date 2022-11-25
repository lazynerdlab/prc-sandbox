import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apis } from "../utils/fetchData";
export const updateBalance = createAsyncThunk(
  "balance/increaseBalance",
  async (data) => {
    try {
      const res = await Apis("post", "transaction", data);
      return res.data.balance;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);
export const fundBalance = createAsyncThunk(
  "balance/fundBalance",
  async (data) => {
    try {
      const res = await Apis("post", "fund", data);
      // return res.data.balance;
    } catch (error) {
      console.log(error);
      // return error.message;
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
      return error.message;
    }
  }
);
