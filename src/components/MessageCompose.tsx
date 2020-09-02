import React from "react";
import { Message } from "../domain";
import css from "./MessageCompose.module.css";

interface Props {
  onMessageSubmit: (message: Message) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({
  onMessageSubmit,
}) => {
  const [inputValue, setInput] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessageSubmit({
      id: `Message-${Date.now()}`,
      message: inputValue,
      author: "Elmar",
      date: Date.now(),
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="message">Text</label>
      <input
        className={css.input}
        type="text"
        name="message"
        id="message"
        onChange={(event) => setInput(event.target.value)}
        value={inputValue}
      />

      <div>Der aktuelle Wert ist: {inputValue}</div>

      <button type="submit">Send</button>
    </form>
  );
};

export default MessageCompose;
