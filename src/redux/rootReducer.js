import {combineReducers} from 'redux';
import settings from './settingsSlice';
import favCities from './favCitiesSlice';

// sagas reducer for API
import {currentWeatherReducer as currentWeather} from '../api/currentWeatherSaga';

//import here all the slice from the features/components
const rootReducer = combineReducers({
  favCities,
  settings,
  currentWeather,
});

export default rootReducer;
