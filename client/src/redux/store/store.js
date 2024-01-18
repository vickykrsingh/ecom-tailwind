import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slices/productSlice'
import cartReducer from '../slices/cartSlice'
import pageReducer from "../slices/pageSlice";
export const store = configureStore({
    reducer:{
        productReducer:productReducer,
        cartReducer:cartReducer,
        pageReducer:pageReducer
    }
})