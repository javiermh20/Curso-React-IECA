import { configureStore } from '@reduxjs/toolkit'
import cartSlices from './cartSlices'

export const store = configureStore({
    reducer: {
        cart: cartSlices
    }
})