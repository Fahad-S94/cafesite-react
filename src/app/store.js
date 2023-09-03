import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { carouselReducer } from '../features/carousel/carouselSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // carousel: carouselReducer
  },
});
