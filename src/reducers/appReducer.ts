import { Message } from "../domain";

export interface AppState {
  readonly messageList: readonly Message[];
}

interface AddMessage {
  type: "ADD_MESSAGE";
  message: Message;
}

interface MessagesFetchSucceeded {
  type: "FETCH_MESSAGES_SUCCEED";
  messages: readonly Message[];
}

interface ClearMessages {
  type: "CLEAR_MESSAGE_LIST";
}

export type AppAction = AddMessage | MessagesFetchSucceeded | ClearMessages;

const initialState: AppState = {
  messageList: [],
};

function appReducer(
  state: AppState = initialState,
  action: AppAction
): AppState {
  if (action.type === "ADD_MESSAGE") {
    return {
      ...state,
      messageList: [...state.messageList, action.message],
    };
  }

  if (action.type === "FETCH_MESSAGES_SUCCEED") {
    return {
      ...state,
      messageList: [...state.messageList, ...action.messages],
    };
  }

  if (action.type === "CLEAR_MESSAGE_LIST") {
    return {
      ...state,
      messageList: [],
    };
  }

  return state;
}

export default appReducer;
