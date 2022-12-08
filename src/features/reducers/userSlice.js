import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
  email: "",
  username: "",
  isVerified: null,
  isAdmin: null,
  isSuperAdmin: null,
  accessToken: "",
  isActive: null,
  AccountNumber: "",
  BankName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    setCredentials: (state, action) => {
      state.value = action.payload;
    },
    setToken: (state, action) => {
      state.value.accessToken = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});
export const { logout, setCredentials, setToken } = userSlice.actions;
export default userSlice.reducer;
