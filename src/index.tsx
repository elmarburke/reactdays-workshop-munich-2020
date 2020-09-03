import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configureStore";

const store = configureStore();

const element = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(element, document.getElementById("root"));
