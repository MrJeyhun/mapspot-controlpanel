import { createStore, compose, applyMiddleware } from 'redux';
import combinedReducer from 'store/combinedReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import combinedSaga from './combinedSaga';
const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(combinedReducer, composeWithDevTools(compose(middlewares)));

sagaMiddleware.run(combinedSaga);

export default store;
