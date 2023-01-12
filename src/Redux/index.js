import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import postReducer from "./post/reducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});
