import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { Apis } from "../utils/fetchData";
const initialStateValue = {
  email: "",
  username: "",
  isVerified: null,
  balance: null,
  error: "",
  isLoading: null,
};
// const getUser = { isLoading: false, user: initialStateValue, error: "" };

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
const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.value.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.value.balance = action.payload.balance;
      state.value.email = action.payload.email;
      state.value.isVerified = action.payload.isVerified;
      state.value.username = action.payload.username;
      state.value.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.value.error = action.payload;
      state.value.isLoading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.value.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.value.balance = action.payload.balance;
      state.value.email = action.payload.email;
      state.value.isVerified = action.payload.isVerified;
      state.value.username = action.payload.username;
      state.value.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.value.error = action.payload.error;
      state.value.isLoading = false;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
