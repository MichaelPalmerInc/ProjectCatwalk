import { combineReducers } from "redux";
import productReducer from "./productReducer.js";

var rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
