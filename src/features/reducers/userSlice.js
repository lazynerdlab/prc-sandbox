import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
  email: "",
  username: "",
  isVerified: null,
  isAdmin: null,
  isSuperAdmin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    setCredentials: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});
export const { logout, setCredentials } = userSlice.actions;
export default userSlice.reducer;
