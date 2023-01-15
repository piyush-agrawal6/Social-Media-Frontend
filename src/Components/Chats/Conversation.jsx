import React from "react";
import "./Conversation.css";
const Conversation = () => {
  return (
    <div className="conversation">
      <div className="convImg">
        <img
          src="https://img.freepik.com/free-icon/user_318-725053.jpg"
          alt=""
        />
        <div></div>
      </div>
      <div className="convStatus">
        <div>User Name</div>
        <span>Online</span>
      </div>
    </div>
  );
};

export default Conversation;
