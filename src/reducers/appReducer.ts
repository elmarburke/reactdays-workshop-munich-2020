import { Message } from "../domain";

export interface AppState {
  readonly messageList: readonly Message[];
}

const initialState: AppState = {
  messageList: [],
};

function appReducer(state: AppState = initialState, action: any): AppState {
  if (action.type === "ADD_MESSAGE") {
    return {
      ...state,
      messageList: [...state.messageList, action.message],
    };
  }

  return state;
}

export default appReducer;
