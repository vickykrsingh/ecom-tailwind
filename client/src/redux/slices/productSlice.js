import { createSlice, nanoid } from "@reduxjs/toolkit";
import { products } from "../../../public/data";
import {
  fetchAllProduct,
  fetchProductByCategory,
  fetchProductByCategoryAndPrice,
  fetchProductByKeyword,
  fetchProductByPrice,
} from "../../lib/fetProductById";

let initialState = {
  products: [],
  totalProducts: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      if (action.payload?.category?.length > 0 || action.payload?.price > 1) {
        if (action.payload?.category?.length > 0 && action.payload?.price > 1) {

          const prod = fetchProductByCategoryAndPrice(
            action.payload.category,
            action.payload.price,
            {
              start: action.payload.start,
              end: action.payload.end,
            }
          );
          state.products=prod.filteredProducts
          state.totalProducts=prod.totalProduct
        } else if (action.payload?.category?.length > 0) {
          const prod = fetchProductByCategory(action.payload.category, {
            start: action.payload.start,
            end: action.payload.end,
          })
          state.products=prod.filteredProducts
          state.totalProducts=prod.totalProduct
        } else if (action.payload?.price > 1) {
          const prod = fetchProductByPrice(action.payload.price, {
            start: action.payload.start,
            end: action.payload.end,
          })
          state.products=prod.filteredProducts
          state.totalProducts=prod.totalProduct
        } else {
          state.products = null;
          state.totalProducts = state.products.length;

          throw new Error("Something went wrong");
        }
      } else {
        const prod = fetchAllProduct()
        state.products = prod.onePageProducts;
        state.totalProducts = prod.totalProduct;
      }
      return state;
    },
    paginate: (state, action) => {
      const currentPageProducts = products.filter(
        (p, i) => i >= action.payload.start * 12 && i < action.payload.end * 12
      );
      state.products = currentPageProducts;
    },
    searchByKeyword: (state,action) => {
      const searchedProduct = fetchProductByKeyword(action.payload)
      state.products=searchedProduct.searchedProduct
      state.totalProducts=searchedProduct.totalProduct
    }
  },
});

export const { setProduct, paginate,searchByKeyword } = productSlice.actions;
export default productSlice.reducer;
