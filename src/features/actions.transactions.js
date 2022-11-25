import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apis } from "../utils/fetchData";

export const getTransactions = createAsyncThunk("transactions/getTransactions",async (data) => {
    try {
      const res = await Apis("post", `history${data.params}`);
      return res.data;
    } catch (error) {
      console.log(error);
      // return error.message;
    }
}
)