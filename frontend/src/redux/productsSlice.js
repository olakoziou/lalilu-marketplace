import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'products',
  initialState: { items: [] },
  reducers: {
    getProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios('/api/products');

      console.log(response);
      const data = await response.data.data;
      dispatch(getProducts(data));
    } catch {}
  };
};

export default productSlice.reducer;
