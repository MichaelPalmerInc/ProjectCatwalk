import { combineReducers } from 'redux';
import productReducer from './productReducer.js';

var rootReducer = combineReducers({
  currentProduct: productReducer,
});

export default rootReducer;
