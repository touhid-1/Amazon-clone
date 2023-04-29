import { configureStore } from '@reduxjs/toolkit'
import amazonReducer from '../store/amazonSlice';

export const store = configureStore({
  reducer: {
      amazonReducer
  },
})