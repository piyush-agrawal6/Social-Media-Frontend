import * as types from "./types";

const initialState = {
  postLoading: false,
  post: [],
  myPost: [],
};

export default function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        post: [...state.post, payload],
        myPost: [...state.post, payload],
      };
    default:
      return state;
  }
}
