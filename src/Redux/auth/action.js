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
    dispatch({
      type: types.REGISTER_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
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
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
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

//update user
export const updateUser = (data, id) => async (dispatch) => {
  console.log(data);
  try {
    dispatch({ type: types.UPDATE_USER_REQUEST });
    const res = await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/user/${id}`,
      data
    );
    console.log(res.data);
    dispatch({ type: types.UPDATE_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

//get all user
export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://busy-jade-sawfish-cape.cyclic.app/user/alluser"
    );
    dispatch({ type: types.GET_USER_SUCCESS, payload: res.data.Alluser });
  } catch (error) {
    console.log(error);
  }
};

//get all user
export const deleteUser = (userid, admin) => async (dispatch) => {
  console.log(userid);
  try {
    const res = await axios.delete(
      `https://busy-jade-sawfish-cape.cyclic.app/user/${userid}`,
      {
        userid,
        userAdminstatus: admin,
      }
    );
    dispatch({ type: types.DELETE_USER_SUCCESS });
  } catch (error) {
    console.log(error);
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
