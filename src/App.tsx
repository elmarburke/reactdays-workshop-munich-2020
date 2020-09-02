import React from "react";
import Message from "./components/MessageView";
import { Message as MessageType } from "./domain";

const App = () => {
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
    </>
  );
};

export default App;
