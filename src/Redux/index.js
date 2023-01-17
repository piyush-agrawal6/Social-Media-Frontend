import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import chatReducer from "./chats/reducer";
import postReducer from "./post/reducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  chat: chatReducer,
});
