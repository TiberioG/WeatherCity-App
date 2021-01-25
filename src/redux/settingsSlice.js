import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: {
    units: 'metric',
    name: 'Tiberio',
  },
  reducers: {
    setUnits(state, action) {
      //todo to implement settings for user
      return {
        ...state,
        units: action.payload,
      };
    },
  },
});

export const {setUnits} = settingsSlice.actions;
export default settingsSlice.reducer;
