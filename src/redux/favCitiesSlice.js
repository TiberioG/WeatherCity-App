import {createSlice} from '@reduxjs/toolkit';

//here I suppose there is no requirement to have only 3 favorites
//so more ids can be pushed in future
//so here I save the ids of the fav cities to display in home
export const favCitiesSlice = createSlice({
  name: 'favCitiesSlice',
  initialState: [2643743, 3165524, 3169070], //London, Turin, Rome
  reducers: {
    addId(state, action) {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    },
  },
});

export const {addId} = favCitiesSlice.actions;
export default favCitiesSlice.reducer;
