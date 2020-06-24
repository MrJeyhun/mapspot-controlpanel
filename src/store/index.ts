import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducer from 'store/combinedReducer';

const store = createStore(combinedReducer, composeWithDevTools());

export default store;
