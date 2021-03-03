import ReactRedux from 'react-redux';
import App from '../components/app/App';
import rootReducer from './reducers/rootReducer.js';
import thunkMiddleware from 'redux-thunk';

var initialState = {
  currentProduct: {},
};

var store = Redux.createStore(rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
  );

  export default store;