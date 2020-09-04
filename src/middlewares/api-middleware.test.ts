import { actions } from "../reducers/appReducer";
import apiMiddleware from "./api-middleware";

window.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(`[
        {
        "id": "1570699374935",
        "message": "baz",
        "author": "Elmar",
        "date": 1570699374935
        },
        {
        "id": "0815",
        "message": "Hallo React mit Redux!",
        "author": "Christian",
        "date": 1570699374936
        }
    ]
  `)
  )
);

const create = () => {
  const dispatch = jest.fn();
  const getState = () => ({});
  const next = jest.fn();

  return { dispatch, getState, next };
};

describe("apiMiddleware()", () => {
  it("hand over actions if not responsible", () => {
    const action = { type: "NOT_ME" };
    const { dispatch, next, getState } = create();

    apiMiddleware({ dispatch, getState })(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it("dispatchs fetchMessagesStated", () => {
    const action = actions.fetchMessages({});
    const { dispatch, next, getState } = create();

    apiMiddleware({ dispatch, getState })(next)(action);

    expect(dispatch).toHaveBeenCalledWith(actions.fetchMessagesStarted());
  });

  it("does the fetch", () => {
    (window.fetch as jest.Mock).mockClear();
    const action = actions.fetchMessages({});
    const { dispatch, next, getState } = create();

    apiMiddleware({ dispatch, getState })(next)(action);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("/messages.json");
  });
});
