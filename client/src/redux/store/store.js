import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slices/productSlice'
import cartReducer from '../slices/cartSlice'
export const store = configureStore({
    reducer:{
        productReducer:productReducer,
        cartReducer:cartReducer
    }
})