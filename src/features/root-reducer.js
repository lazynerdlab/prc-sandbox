import { combineReducers } from "redux";
import user from "./user";
import balance from "./balance";
import transactions from "./transactions";
import sessionStorage from "redux-persist/es/storage/session";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  sessionStorage,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  user,
  balance,
  transactions,
});

export const PersistedReducer = persistReducer(persistConfig, rootReducer);
