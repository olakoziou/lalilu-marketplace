import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'navigation',
  initialState: { active: 'top' },
  reducers: {
    changeMain: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { changeMain } = navSlice.actions;

export const navState = (state) => state.navigation.active;

export default navSlice.reducer;
