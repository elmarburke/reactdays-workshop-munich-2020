import React from "react";
import styled from "styled-components";

const Article = styled.article`
  background-color: pink;
  border: 1px solid green;
  color: blueviolet;
`;

interface Props {
  opinion: string;
  name: string;
}

const MessageView: React.FunctionComponent<Props> = ({ name, opinion }) => {
  return (
    <Article>
      {opinion}

      <footer>{name}</footer>
    </Article>
  );
};

export default MessageView;
