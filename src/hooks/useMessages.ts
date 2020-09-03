import React from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { AppState, AppAction } from "../reducers/appReducer";
import { Message } from "../domain";

const useMyDispatch = () => {
  return useDispatch<Dispatch<AppAction>>();
};

const useMessages = () => {
  const messages = useSelector<AppState, readonly Message[]>(
    (state) => state.messageList
  );
  const dispatch = useMyDispatch();

  const addMessage = React.useCallback(
    (message: Message): void => {
      dispatch({ type: "ADD_MESSAGE", message });
    },
    [dispatch]
  );

  React.useEffect(() => {
    const controller = new AbortController();

    fetch("/messages.json", { signal: controller.signal })
      .then((res) => res.json())
      .then((messages) =>
        dispatch({ type: "FETCH_MESSAGES_SUCCEED", messages })
      );

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { messages, addMessage };
};

export default useMessages;
