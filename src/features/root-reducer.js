import { combineReducers } from "redux";
import user from "./user";
import balance from "./balance";
import transactions from "./transactions";
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage:storageSession,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  user,
  balance,
  transactions,
});

export const PersistedReducer = persistReducer(persistConfig, rootReducer);
