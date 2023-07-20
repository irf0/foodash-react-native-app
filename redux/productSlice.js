import { createSlice } from "@reduxjs/toolkit";
import foodData from "../utils/foodData";

const initialState = {
  products: foodData,
  selectedProduct: null,
  //Imp! This is the func. that will show only the selected product in cart
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});
