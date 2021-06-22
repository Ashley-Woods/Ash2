import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const jsx = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(jsx, document.getElementById("root"));
