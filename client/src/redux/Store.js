import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";
import rootReducer from './root-reducer';

const middlewares = [logger, reduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;