import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { PersistedReducer } from "./root-reducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
