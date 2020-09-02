import React from "react";
import MessageView from "./components/MessageView";

const App = () => {
  return (
    <>
      <MessageView name="Elmar" opinion="React is..." />
      <MessageView name="Christan" opinion="PHP is better" />
    </>
  );
};

export default App;
