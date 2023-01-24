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

// delete post
export const deletePost = (id, userid) => async (dispatch) => {
  console.log({ id, userid });
  try {
    const res = await fetch(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ userid }),
        headers: { "Content-Type": "application/json" },
      }
    );
    let data = await res.json();
    console.log(data);
    dispatch({
      type: types.DELETE_POST_SUCCESS,
      payload: { message: data.message, id },
    });
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

// edit post
export const editPost = (postId, userid, data) => async (dispatch) => {
  console.log({ postId, userid, data });
  try {
    let res = await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${postId}`,
      { userid, desc: data }
    );
    console.log(res);
    dispatch({
      type: types.EDIT_POST_SUCCESS,
      payload: { updatedPost: res.data.post, id: postId },
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
    await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${postId}/comment`,
      data
    );
  } catch (error) {
    console.log(error);
  }
};

// delete post
export const deleteComment = (id, userid) => async (dispatch) => {
  console.log({ id, userid });
  try {
    const res = await fetch(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ userid }),
        headers: { "Content-Type": "application/json" },
      }
    );
    let data = await res.json();
    console.log(data);
    dispatch({
      type: types.DELETE_COMMENT_SUCCESS,
      payload: { message: data.message, id },
    });
  } catch (error) {
    console.log(error);
  }
};

// edit post
export const editComment = (postid, id, comment) => async (dispatch) => {
  console.log({ postid, id, comment });
  try {
    let res = await axios.put(
      `https://busy-jade-sawfish-cape.cyclic.app/post/${postid}/updatecomment`,
      { id, comment }
    );
    console.log(res);
    // dispatch({
    //   type: types.EDIT_COMMENT_SUCCESS,
    //   payload: { updatedPost: res.data.post, id },
    // });
  } catch (error) {
    console.log(error);
  }
};
