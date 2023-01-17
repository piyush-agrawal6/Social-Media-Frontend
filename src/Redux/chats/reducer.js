import * as types from "./types";

const initialState = {
  message: [],
  allChats: [],
};

export default function chatReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_USER_CHATS_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
