import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { apiSlice } from "./apiSlice";

//connecting the reducers (event handlers) with the store
const rootReducer = combineReducers({
  cart: cartReducer,
  api: apiSlice.reducerPath,

  // Add other reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
