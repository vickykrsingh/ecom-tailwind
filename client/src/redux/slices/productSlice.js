import { createSlice,nanoid } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchProductByCategory, fetchProductByCategoryAndPrice, fetchProductByPrice } from "../../lib/fetProductById";

let initialState = {
    products:[]
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            if(action.payload?.category?.length>0 || action.payload?.price>1){
                if(action.payload?.category?.length>0 && action.payload?.price>1){
                    state.products=fetchProductByCategoryAndPrice(action.payload.category,action.payload.price)
                }else if(action.payload?.category?.length>0){
                    state.products=fetchProductByCategory(action.payload.category)
                }else if(action.payload?.price>1){
                    state.products=fetchProductByPrice(action.payload.price)
                }else{
                    state.products=null
                    throw new Error("Something went wrong")
                }
            }else{
                state.products=fetchAllProduct()
            }
            return state
        }
    }
})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;

// dispatch ke andar hi setProduct ko call karenge.
// dispatch(setProduct(values))
// useSelector(state=>state.product)