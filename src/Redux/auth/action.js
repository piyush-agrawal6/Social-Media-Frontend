import * as types from "./types";
import axios from "axios";

// Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_USER_REQUEST });
    const res = await axios.post(
      `https://busy-jade-sawfish-cape.cyclic.app/auth/register`,
      userData
    );
    console.log("res: ", res.data);
    dispatch({
      type: types.REGISTER_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.REGISTER_USER_ERROR,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

//login user
export const authLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const res = await axios.post(
      "https://busy-jade-sawfish-cape.cyclic.app/auth/login",
      data
    );
    console.log(res.data);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

// logout user
export const authLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: types.AUTH_LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};
