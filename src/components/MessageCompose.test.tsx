import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MessageCompose from "./MessageCompose";

describe("<MessageCompose />", () => {
  it("sends a message", async () => {
    const handleMessageSubmit = jest.fn();
    render(<MessageCompose onMessageSubmit={handleMessageSubmit} />);

    const input = screen.getByLabelText("Text");
    const submitButton = screen.getByText(/send/i);

    userEvent.type(input, "Hallo Welt");
    userEvent.click(submitButton);

    expect(handleMessageSubmit).toHaveBeenCalled();
    expect(handleMessageSubmit).toHaveBeenCalledWith({
      id: expect.any(String),
      message: "Hallo Welt",
      author: "Elmar",
      date: expect.any(Number),
    });
  });
});
