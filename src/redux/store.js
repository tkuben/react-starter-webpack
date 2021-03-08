import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'Reducers/index';

const middleware = [thunk];

const composeEnhancers = (process.env.NODE_ENV === "development") ? composeWithDevTools : compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;
