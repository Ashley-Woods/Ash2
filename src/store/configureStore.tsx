import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import mapReducer from "../reducers/mapReducer";

// add dev tools, when in dev mode
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create and store objects with their reducer handlers

export default () => {
  // const store = configureStore ({
  //   reducer: mapReducer
  // })

  const store = createStore(
    combineReducers({
      map: mapReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
