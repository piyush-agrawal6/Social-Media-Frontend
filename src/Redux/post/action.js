import * as types from "./types";
import axios from "axios";

// create post
export const createPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_POST_REQUEST });
    const res = await axios.post(
      `https://busy-jade-sawfish-cape.cyclic.app/post`,
      data
    );
    dispatch({ type: types.CREATE_POST_SUCCESS, payload: res.data.postData });
    console.log("res: ", res.data.postData);
  } catch (error) {
    console.log(error);
  }
};
