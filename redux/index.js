import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { cartSlice } from "./cartSlice";
import cartReducer from "./cartSlice";

//connecting the reducers (event handlers) with the store
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
});
