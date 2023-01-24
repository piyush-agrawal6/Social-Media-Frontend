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
        myPost: [...state.myPost, payload],
      };
    case types.GET_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        post: payload,
      };
    case types.GET_CURRENT_USER_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case types.GET_CURRENT_USER_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        myPost: payload,
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        post: [...state.post.filter((elem) => elem._id !== payload.id)],
        myPost: [...state.myPost.filter((elem) => elem._id !== payload.id)],
      };
    case types.EDIT_POST_SUCCESS:
      return {
        ...state,
        post: [
          ...state.post.filter((elem) => {
            if (elem._id === payload.id) {
              return payload.updatedPost;
            }
            return elem;
          }),
        ],
        myPost: [
          ...state.myPost.map((elem) => {
            if (elem._id === payload.id) {
              return payload.updatedPost;
            }
            return elem;
          }),
        ],
      };
    default:
      return state;
  }
}
