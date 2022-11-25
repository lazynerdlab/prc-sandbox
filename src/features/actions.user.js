import { createAsyncThunk } from "@reduxjs/toolkit";
export const login = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await Apis("post", "login", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
export const register = createAsyncThunk("user/register", async (data) => {
  try {
    const res = await Apis("post", "register", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
