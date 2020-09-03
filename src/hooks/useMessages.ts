import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../reducers/appReducer";
import { Message } from "../domain";

const useMessages = () => {
  const messages = useSelector<AppState, readonly Message[]>(
    (state) => state.messageList
  );
  const dispatch = useDispatch();

  // const [messages, setMessage] = React.useState<readonly Message[]>([]);

  // React.useEffect(() => {
  //   const controller = new AbortController();

  //   fetch("/messages.json", { signal: controller.signal })
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data));

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const addMessage = (message: Message): void => {
    dispatch({ type: "ADD_MESSAGE", message });
    // setMessage([...messages, message]);
  };

  return { messages, addMessage };
};

export default useMessages;
