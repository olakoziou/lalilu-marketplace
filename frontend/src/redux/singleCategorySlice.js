import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categorySlice = createSlice({
  name: 'category',
  initialState: { items: [] },
  reducers: {
    getProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getProducts } = categorySlice.actions;

export const fetchCategoryProducts = (category) => {
  return async (dispatch) => {
    try {
      const response = await axios(`/api/products?category=${category}`);

      const data = await response.data.data;
      console.log(data);
      dispatch(getProducts(data));
    } catch {}
  };
};

export default categorySlice.reducer;
