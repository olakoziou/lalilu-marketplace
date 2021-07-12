import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import categoriesReducer from '../redux/categoriesSlice';
import categoryReducer from '../redux/singleCategorySlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    category: categoryReducer,
  },
});
