import axios from "axios";

// User chats
export const userChats = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://busy-jade-sawfish-cape.cyclic.app/chat/${id}`
    );
    return res;
    // dispatch({
    //   type: types.GET_USER_CHATS_SUCCESS,
    //   payload: {},
    // });
  } catch (error) {
    console.log(error);
  }
};

// User messages
export const getUserMessage = (chatId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://busy-jade-sawfish-cape.cyclic.app/message/${chatId}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
