import { Middleware } from "redux";
import { actions } from "../reducers/appReducer";

const apiMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  if (actions.fetchMessages.match(action)) {
    dispatch(actions.fetchMessagesStarted());

    fetch("/messages.json")
      .then((res) => res.json())
      .then((messages) => dispatch(actions.fetchMessagesSucceed({ messages })));

    next(action);
    return;
  }

  console.log("Hello from our very own middleware");

  next(action);
};

export default apiMiddleware;
