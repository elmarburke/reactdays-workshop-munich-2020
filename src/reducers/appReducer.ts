// import { Message } from "../domain";

interface AppState {
  readonly messageList: readonly string[];
}

const initialState: AppState = {
  messageList: [],
};

function appReducer(state: AppState = initialState, action: any): AppState {
  if (action.type === "ADD_MESSAGE") {
    return {
      ...state,
      messageList: [...state.messageList, action.text],
    };
  }

  return state;
}

export default appReducer;
