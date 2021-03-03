import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import thunkMiddleware from 'redux-thunk';

var initialState = {
  currentProduct: null,
};

var store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

export default store;
