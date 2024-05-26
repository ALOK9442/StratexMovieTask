import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieslice';

export const store = configureStore({
  reducer: {
    movies: movieReducer
  }
});
