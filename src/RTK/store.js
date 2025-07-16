import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, menuSlice } from "./slice";


export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
})
