import React from "react";
import Message from "./components/MessageView";

const App = () => {
  return (
    <>
      <Message
        message={{
          id: "1",
          author: "Elmar",
          message: "React is ...",
          date: Date.now(),
        }}
      />
      <Message
        message={{
          id: "2",
          author: "Christan",
          message: "PHP is better",
          date: Date.now(),
        }}
      />
    </>
  );
};

export default App;
