import {all} from 'redux-saga/effects';
import {watcherCurrentWeatherSaga as curWeather} from '../api/currentWeatherSaga';

export default function* rootSaga() {
  yield all([curWeather()]);
}
