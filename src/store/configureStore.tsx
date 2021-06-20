import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import mapReducer from '../reducers/map';

// add dev tools, when in dev mode
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create and store objects with their reducer handlers

export default () => {
  const store = createStore(
    //    combineReducers({
    //      map: mapReducer,
    //    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
