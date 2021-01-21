import {combineReducers} from 'redux';
import template from './templateSlice';

//import here all the slice from the features/components
const rootReducer = combineReducers({
  template,
});

export default rootReducer;
