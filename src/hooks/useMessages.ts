import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, actions, fetchMessages } from "../reducers/appReducer";
import { Message } from "../domain";

const useMessages = () => {
  const messages = useSelector<AppState, readonly Message[]>(
    (state) => state.messageList
  );
  const dispatch = useDispatch();

  const addMessage = React.useCallback(
    (message: Message): void => {
      dispatch(actions.addMessage({ message }));
    },
    [dispatch]
  );

  const clearMessage = React.useCallback(() => {
    dispatch(actions.clearMessageList());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(actions.fetchMessages({}));
  }, [dispatch]);

  return { messages, addMessage, clearMessage };
};

export default useMessages;
