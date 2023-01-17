import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSingleUser } from "../../Redux/auth/action";
import "./Conversation.css";
const Conversation = ({ data, userId }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const chatId = data?.member.find((id) => id !== userId);

  useEffect(() => {
    dispatch(getSingleUser(chatId)).then((res) => {
      setUserData(res.data);
    });
  }, [chatId, dispatch]);

  return (
    <div className="conversation">
      <div className="convImg">
        <img src={userData?.profilePicture} alt="" />
        <div></div>
      </div>
      <div className="convStatus">
        <div>{userData?.name}</div>
        <span>Online</span>
      </div>
    </div>
  );
};

export default Conversation;
