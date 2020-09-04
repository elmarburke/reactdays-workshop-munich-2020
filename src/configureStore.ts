import { configureStore as configureToolkitStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";

// @ts-ignore
const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("found function");
    action(dispatch, getState);

    return;
  }

  console.log("not a function", typeof action);

  console.log(action);

  next(action);
};

// @ts-ignore
const loggingMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.info("state before reducer", getState());

  next(action);

  console.info(new Date().toJSON(), "action", action.type, action.payload);
  console.info("state after reducer", getState());
};

const configureStore = () => {
  return configureToolkitStore({
    reducer: appReducer,
    middleware: [thunkMiddleware, loggingMiddleware],
  });
};

export default configureStore;
