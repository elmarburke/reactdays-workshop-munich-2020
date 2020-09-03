import { createStore } from "redux";
import appReducer from "./reducers/appReducer";

const configureStore = () => {
  return createStore(
    appReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
