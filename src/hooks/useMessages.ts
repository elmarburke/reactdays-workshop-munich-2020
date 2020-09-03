import React from "react";
import {
  Message,
  useMessagesQuery,
  useSendMessageMutation,
} from "../generated/graphql";

const useMessages = () => {
  const { data } = useMessagesQuery();
  const [sendMessage] = useSendMessageMutation();

  const addMessage = React.useCallback(
    (message: Message): void => {
      sendMessage({
        variables: { author: message.author, text: message.text },
      });
    },
    [sendMessage]
  );

  return { messages: data || [], addMessage, clearMessage: () => {} };
};

export default useMessages;
