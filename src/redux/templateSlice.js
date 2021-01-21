import {createSlice} from '@reduxjs/toolkit';

export const templateSlice = createSlice({
  name: 'templateSlice',
  initialState: false,
  reducers: {
    toggle(state) {
      return !state;
    },
  },
});

export const {toggle} = templateSlice.actions;
export default templateSlice.reducer;
