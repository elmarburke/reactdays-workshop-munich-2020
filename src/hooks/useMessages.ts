import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../reducers/appReducer";
import { Message } from "../domain";

const useMessages = () => {
  const messages = useSelector<AppState, readonly Message[]>(
    (state) => state.messageList
  );
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
    // setMessage([...messages, message]);
  };

  return { messages, addMessage };
};

export default useMessages;
