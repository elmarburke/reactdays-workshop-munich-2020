import appReducer, { AppState, actions } from "./appReducer";

describe("appReducer()", () => {
  it("handles the ADD_MESSAGE action", () => {
    const action = actions.addMessage({
      message: {
        id: "1",
        message: "Hello",
        author: "Elmar",
        date: 1,
      },
    });

    const currentState: AppState = {
      messageList: [],
    };

    const newState = appReducer(currentState, action);

    expect(newState).toMatchInlineSnapshot(`
      Object {
        "messageList": Array [
          Object {
            "author": "Elmar",
            "date": 1,
            "id": "1",
            "message": "Hello",
          },
        ],
      }
    `);
  });

  it("adds fetched messages", () => {
    const state = appReducer(
      { messageList: [] },
      actions.fetchMessagesSucceed({
        messages: [
          {
            id: "1570699374935",
            message: "baz",
            author: "Elmar",
            date: 1570699374935,
          },
          {
            id: "0815",
            message: "Hallo React mit Redux!",
            author: "Christian",
            date: 1570699374936,
          },
        ],
      })
    );
    expect(state).toEqual({
      messageList: [
        {
          id: "1570699374935",
          message: "baz",
          author: "Elmar",
          date: 1570699374935,
        },
        {
          id: "0815",
          message: "Hallo React mit Redux!",
          author: "Christian",
          date: 1570699374936,
        },
      ],
    });
  });
});
