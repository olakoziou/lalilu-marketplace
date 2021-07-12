import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { items: [] },
  reducers: {
    getCategories: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export const fetchCategories = (category) => {
  return async (dispatch) => {
    try {
      const response = await axios(`/api/categories`);
      const data = response.data.data;

      dispatch(getCategories(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default categoriesSlice.reducer;
