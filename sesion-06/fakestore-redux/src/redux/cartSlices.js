import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload)
        }
    }
});

export const { addToCart, removeFromCart } = cartSlices.actions;

export default cartSlices.reducer;