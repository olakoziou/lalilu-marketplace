import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { getProducts } = productSlice.actions;

export const fetchApi = () => {
  return async (dispatch) => {
    try {
      const response = await axios('http://localhost:5000/api');
      const data = await response.data;
      dispatch(getProducts(data));
    } catch {}
  };
};

export const productsState = (state) => state.products;

export default productSlice.reducer;
