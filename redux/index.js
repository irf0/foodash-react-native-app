import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

//connecting the reducers (event handlers) with the store
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
