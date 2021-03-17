import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import navReducer from '../redux/navSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    navigation: navReducer,
  },
});
