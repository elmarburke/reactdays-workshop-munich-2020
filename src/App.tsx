import React from "react";
import Message from "./components/MessageView";
import MessageCompose from "./components/MessageCompose";
import useMessages from "./hooks/useMessages";
import MessageClearButton from "./components/MessageClearButton";

const App: React.FunctionComponent = () => {
  const { messages, addMessage, clearMessage } = useMessages();

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <hr />

      <MessageCompose onMessageSubmit={addMessage} />

      <MessageClearButton onClear={clearMessage} />
    </>
  );
};

export default App;
