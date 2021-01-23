import {all} from 'redux-saga/effects';
import {watcherCurrentWeatherSaga as currentWeather} from '../api/currentWeatherSaga';
import {watcherForecastWeatherSaga as forecastWeather} from '../api/forecastWeatherSaga';

export default function* rootSaga() {
  yield all([currentWeather(), forecastWeather()]);
}
