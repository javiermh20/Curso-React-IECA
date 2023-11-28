import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = storedCart;

const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlices.actions;
export default cartSlices.reducer;