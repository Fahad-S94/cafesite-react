// Import necessary Redux functions
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add it to the cart
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      // Remove an item from the cart based on its ID
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
    clearCart: () => [],
  },
});

export const cartReducer = cartSlice.reducer

// Export the actions and reducer
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
