import React from "react";
import Message from "./components/MessageView";
import { Message as MessageType } from "./domain";
import MessageCompose from "./components/MessageCompose";

const App: React.FunctionComponent = () => {
  const messages: readonly MessageType[] = [
    {
      id: "1",
      author: "Elmar",
      message: "React is ...",
      date: Date.now(),
    },
    {
      id: "2",
      author: "Christian",
      message: "PHP is better",
      date: Date.now(),
    },
  ];

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <hr />

      <MessageCompose />
    </>
  );
};

export default App;
