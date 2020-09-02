import React from "react";
import MessageView from "./components/MessageView";

const App = () => {
  return (
    <>
      <MessageView
        message={{
          id: "1",
          author: "Elmar",
          message: "React is ...",
          date: Date.now(),
        }}
      />
      <MessageView
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
