import React from "react";
import styled from "styled-components";
import { Message as MessageType } from "../domain";

const Article = styled.article`
  background-color: pink;
  border: 1px solid green;
  color: blueviolet;
`;

interface Props {
  message: MessageType;
}

const Message: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <Article>
      {message.message}

      <footer>{message.author}</footer>
    </Article>
  );
};

export default Message;
