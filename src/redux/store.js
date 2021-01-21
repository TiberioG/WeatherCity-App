import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

//use configure store from the toolkit and apply saga, remember to set thunk the default one to false
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

//run the rootSaga

sagaMiddleware.run(rootSaga);

export default store;
