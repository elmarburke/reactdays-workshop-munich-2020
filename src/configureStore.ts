import { createStore } from "redux";
import appReducer from "./reducers/appReducer";

const configureStore = () => {
  return createStore(appReducer);
};

export default configureStore;
