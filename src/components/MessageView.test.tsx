import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import MessageView from "./MessageView";

describe("<MessageView />", () => {
  it("shows the message", async () => {
    render(
      <MessageView
        message={{
          id: "1",
          message: "Hello World",
          author: "Hans Wurst",
          date: 1,
        }}
      />
    );

    expect(screen.getByText("Hello World")).toMatchSnapshot();
  });
});
