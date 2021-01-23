import {takeEvery, call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import API_CONFIG from './API-config.json';

// action types
const FORECAST_WHT_REQ = 'FORECAST_WHT_REQ';
const FORECAST_WHT_OK = 'FORECAST_WHT_OK';
const FORECAST_WHT_FETCH_ERR = 'FORECAST_WHT_FETCH_ERR'; // this if we catch an error from axios fetch

// reducer with initial state, loginData aka token
const initialState = {
  fetching: false,
  error: null,
};

//this must be imported in rootReducer
export function forecastWeatherReducer(state = initialState, action) {
  switch (action.type) {
    case FORECAST_WHT_REQ:
      return {...state, fetching: true, error: null};
    case FORECAST_WHT_OK:
      return {
        ...state,
        [action.id]: action.data,
        fetching: false,
      };
    case FORECAST_WHT_FETCH_ERR:
      return {...state, fetching: false, error: action.error};
    default:
      return state;
  }
}

//selector for the user settings
const settingsSelector = (state) => state.settings;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherForecastWeatherSaga() {
  yield takeEvery('FORECAST_WHT_REQ', workerSaga); // takeEvery to allow multiple parallel get requests
}

// here using one call api which is available for free but doesn't accept an id but needs the coordinates
function getForecastWeather(coord, settings) {
  let config = {
    method: 'get',
    url:
      API_CONFIG.url +
      'onecall?lat=' +
      coord.lat +
      '&lon=' +
      coord.lon +
      '&exclude=current' +
      '&appid=' +
      API_CONFIG.key +
      '&units=' +
      settings.units,
    headers: {},
  };
  return axios(config);
}

// worker saga: makes the api call when watcher saga sees the action
// the action is automatically passed by TakeLatest
function* workerSaga(action) {
  try {
    const settings = yield select(settingsSelector);

    //for this specific API we need to extract the coordinates of the town we have identified by ID
    //action.payload is the id
    const coord = yield select(
      (state) => state.currentWeather[action.payload]?.coord, //todo what if this is null!!!
    );
    const response = yield call(getForecastWeather, coord, settings);
    const data = response?.data;

    // here in action.payload we have the id of the city and in data the response
    yield put({type: 'FORECAST_WHT_OK',  data, id: action.payload});
    //yield call(updateFilters, eventsData);
  } catch (err) {
    //we need to serialize the Error obj
    const error = err.response?.data;
    // dispatch a failure action to the store with the error
    yield put({type: 'FORECAST_WHT_FETCH_ERR', error});
  }
}
