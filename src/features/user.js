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
    return {
      email: res.data.email,
      username: res.data.username,
      isVerified: res.data.isverified,
      balance: res.data.balance,
      error: "",
      isLoading: false,
    };
  } catch (error) {
    console.log(error);
    return {
      email: "",
      username: "",
      isVerified: null,
      balance: null,
      error: error.response.data.message,
      isLoading: false,
    };
  }
});
export const register = createAsyncThunk("user/register", async (data) => {
  try {
    const res = await Apis("post", "register", data);
    console.log(res.data);
    return {
      email: res.data.others.email,
      username: res.data.others.username,
      isVerified: res.data.others.isverified,
      balance: res.data.others.balance,
      error: "",
      isLoading: false,
    };
  } catch (error) {
    console.log(error);
    return {
      email: "",
      username: "",
      isVerified: null,
      balance: null,
      error: error.response.data,
      isLoading: false,
    };
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
      state.value = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(register.pending, (state) => {
      state.value.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.value = action.payload;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
