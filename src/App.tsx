import React from "react";
import Message from "./components/MessageView";
import MessageCompose from "./components/MessageCompose";
import useMessages from "./hooks/useMessages";

const App: React.FunctionComponent = () => {
  const { messages, addMessage } = useMessages();

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <hr />

      <MessageCompose onMessageSubmit={addMessage} />
    </>
  );
};

export default App;
