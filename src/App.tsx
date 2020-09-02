import React from "react";
import Message from "./components/MessageView";
import { Message as MessageType } from "./domain";
import MessageCompose from "./components/MessageCompose";

const App: React.FunctionComponent = () => {
  const defaultMessages: readonly MessageType[] = [
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

  const [messages, setMessage] = React.useState<readonly MessageType[]>(
    defaultMessages
  );

  const handleMessageSubmit = (message: MessageType) => {
    setMessage([...messages, message]);
  };

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      <hr />

      <MessageCompose onMessageSubmit={handleMessageSubmit} />
    </>
  );
};

export default App;
