import { configureStore } from '@reduxjs/toolkit';
// import { carouselReducer } from '../features/carousel/carouselSlice';
import { cartReducer } from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // carousel: carouselReducer
  },
});
