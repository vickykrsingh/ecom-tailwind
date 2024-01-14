import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItemIndex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        state.product[existingItemIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        state.product.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
        const updatedCart = state.product.map(item => {
          if (item.id === action.payload.id) {
            // Check if the quantity is greater than 1, decrease it
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // If the quantity is 1 or less, remove the item from the cart
              return null;
            }
          }
          return item;
        }).filter(Boolean); // Filter out null values (items with quantity 1 or less)
      
        state.product = updatedCart;
      },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
