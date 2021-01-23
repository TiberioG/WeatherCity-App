import {takeEvery, call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import API_CONFIG from './API-config.json';

// action types
const CUR_WHT_REQ = 'CUR_WHT_REQ';
const CUR_WHT_OK = 'CUR_WHT_OK';
const CUR_WHT_FETCH_ERR = 'CUR_WHT_FETCH_ERR'; // this if we catch an error from axios fetch

// reducer with initial state, loginData aka token
const initialState = {
  fetching: false,
  error: null,
};

//this must be imported in rootReducer
export function currentWeatherReducer(state = initialState, action) {
  switch (action.type) {
    case CUR_WHT_REQ:
      return {...state, fetching: true, error: null};
    case CUR_WHT_OK:
      return {
        ...state,
        [action.payload.id]: action.payload,
        fetching: false
      };
    case CUR_WHT_FETCH_ERR:
      return {...state, fetching: false, error: action.error};
    default:
      return state;
  }
}

//selector for the user settings
const settingsSelector = (state) => state.settings;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherCurrentWeatherSaga() {
  yield takeEvery('CUR_WHT_REQ', workerSaga); // takeEvery to allow multiple parallel get requests
}

// this is responsible of calling API
function getCurrentWeather(id, settings) {
  let config = {
    method: 'get',
    url: API_CONFIG.url + 'weather?id=' + id + '&appid=' + API_CONFIG.key + '&units=' + settings.units,
    headers: {},
  };
  return axios(config);
}

// worker saga: makes the api call when watcher saga sees the action
// the action is automatically passed by TakeLatest
function* workerSaga(action) {
  try {
    const settings = yield select(settingsSelector);

    //in call you have (fn, ...args)
    const response = yield call(getCurrentWeather, action.payload, settings);
    const payload = response?.data;

    // dispatch a success action to the store with the data from Axios

    yield put({type: 'CUR_WHT_OK', payload});
    //yield call(updateFilters, eventsData);
  } catch (err) {
    //we need to serialize the Error obj
    const error = err.response?.data; //todo refacror here with proxy
    // dispatch a failure action to the store with the error
    yield put({type: 'CUR_WHT_FETCH_ERR', error});
  }
}
