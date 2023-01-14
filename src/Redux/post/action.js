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
  } catch (error) {
    console.log(error);
  }
};

// get post
export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_POST_REQUEST });
    const res = await axios.get(
      `https://busy-jade-sawfish-cape.cyclic.app/post/allpost`
    );
    dispatch({ type: types.GET_POST_SUCCESS, payload: res.data.post });
  } catch (error) {
    console.log(error);
  }
};

// get current user post
export const userPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CURRENT_USER_POST_REQUEST });
    const res = await axios.get(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${id}`
    );
    dispatch({
      type: types.GET_CURRENT_USER_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// like dislike post
export const likePost = (postId, id) => async (dispatch) => {
  try {
    await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${postId}/like`,
      { userid: id }
    );
  } catch (error) {
    console.log(error);
  }
};

// add comment
export const postComment = (data, postId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${postId}/comment`,
      data
    );
    dispatch({
      type: types.COMMENT_SUCCESS,
      payload: { id: postId, data: res.data.comment },
    });
  } catch (error) {
    console.log(error);
  }
};
