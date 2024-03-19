import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import { authApi } from "@/apis/auth.api";

const store = configureStore({
  reducer: combineReducers({
    [authSlice.name]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// global store type
export type RootStore = ReturnType<typeof store.getState>;

export default store;
