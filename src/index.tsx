import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./configureStore";

const store = configureStore();

const element = <App />;

ReactDOM.render(element, document.getElementById("root"));
