import React from "react";

interface Props {
  onClear: () => void;
}

const MessageClearButton: React.FunctionComponent<Props> = ({ onClear }) => {
  const handleClick = () => {
    onClear();
  };

  return (
    <button type="button" onClick={handleClick}>
      Clear messages
    </button>
  );
};

export default MessageClearButton;
