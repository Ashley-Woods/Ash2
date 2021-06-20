import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import configureStore from "./store/configureStore";

// create store
const store = configureStore();

// create parent java script xml (jsx), and  pass in store, so accessible by children
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
