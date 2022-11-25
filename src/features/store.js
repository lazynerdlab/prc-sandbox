import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import balance from "./balance";
import transactions from "./transactions";

export const store = configureStore({
    reducer: {
      user,
      balance,
      transactions
    },
});