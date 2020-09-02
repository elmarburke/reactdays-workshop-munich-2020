import React from "react";

interface Props {}

const MessageCompose: React.FunctionComponent<Props> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("message");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Text</label>
      <input type="text" name="message" id="message" />

      <button type="submit">Send</button>
    </form>
  );
};

export default MessageCompose;
