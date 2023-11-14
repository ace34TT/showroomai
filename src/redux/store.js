import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./../features/auth.features";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const reducers = combineReducers({
  auth_asdJ4Kh2a: AuthReducer,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: [""],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [""],
      ignoredPaths: [""],
    }),
});

export const RootState = store.getState;
