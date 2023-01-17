import * as types from "./types";

const TOKEN = localStorage.getItem("token");
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userRegister: { loading: false, error: false, message: "" },
  userLogout: { message: "" },
  deleteMessage: { message: "" },
  passwordChange: { message: "" },
  allUser: [],
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    case "AUTH_LOGIN_RESET":
      return {
        ...state,
        userLogin: { loading: false, error: false, message: "" },
      };
    case types.AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        userLogout: { message: "Logout Successfully" },
        data: {
          isAuthenticated: false,
          token: null,
          user: null,
        },
      };
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        userRegister: { loading: true, error: false },
      };
    case types.REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userRegister: {
          loading: false,
          error: false,
          message: payload.message,
        },
        data: {
          isAuthenticated: payload.token ? true : false,
          token: payload.token,
          user: payload.user,
        },
      };
    case types.REGISTER_USER_ERROR:
      return {
        ...state,
        userRegister: { loading: false, error: true, message: payload.message },
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        allUser: payload,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          user: payload,
        },
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteMessage: payload,
      };
    case "RESET_CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        passwordChange: "",
        deleteMessage: "",
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordChange: payload,
      };
    case types.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            following: [...state.data.user.following, payload],
          },
        },
      };
    case types.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            following: [
              ...state.data.user.following.filter((id) => id !== payload),
            ],
          },
        },
      };
    case "AUTH_REGISTER_RESET":
      return {
        ...state,
        userRegister: { loading: false, error: false, message: "" },
      };

    default:
      return state;
  }
}
