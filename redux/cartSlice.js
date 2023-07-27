import { createSlice } from "@reduxjs/toolkit";
import foodData from "../utils/foodData";

const initialState = {
  items: [],
  totalPrice: 0,
  restaurantName: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add an item to the cart.
    addItemToCart(state, action) {
      const { itemId, restaurantName } = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      } else {
        // If it's a new item, add it to the cart
        const newItem = foodData.find((foodItem) => foodItem.id === itemId);
        if (newItem) {
          newItem.quantity = 1; // Set initial quantity to 1
          state.items.push(newItem);
          state.totalPrice += newItem.price;
        }
      }
      state.restaurantName = restaurantName;
    },
    //Remove an item from the cart.
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        const removedItem = state.items.splice(index, 1)[0];
        state.totalPrice -= removedItem.price;
      }
    },
    //Clear the whole cart at once.
    clearAllItemFromCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    //Decrease qty of each item
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    //Increase qty of each item
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearAllItemFromCart,
  updateTotalPrice,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
