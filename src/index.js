import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// create parent java script xml (jsx), and  pass in store, so accessible by children
const jsx = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(jsx, document.getElementById("root"));
