import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../domain";

export interface AppState {
  loading: boolean;
  readonly messageList: readonly Message[];
}

export const fetchMessages = () => {
  return (dispatch: any) => {
    dispatch(actions.fetchMessagesStarted());

    fetch("/messages.json")
      .then((res) => res.json())
      .then((messages) => dispatch(actions.fetchMessagesSucceed({ messages })));
  };
};

const initialState: AppState = {
  loading: false,
  messageList: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addMessage(state, action: PayloadAction<{ message: Message }>) {
      state.messageList.push(action.payload.message);
      return state;
    },
    fetchMessages(state, action) {
      return state;
    },
    fetchMessagesSucceed(
      state,
      action: PayloadAction<{ messages: readonly Message[] }>
    ) {
      state.loading = false;
      state.messageList.push(...action.payload.messages);
      return state;
    },
    clearMessageList(state) {
      state.messageList = [];
      return state;
    },
    fetchMessagesStarted(state) {
      state.loading = true;
      return state;
    },
  },
});

export const actions = appSlice.actions;

export default appSlice.reducer;
