import React, { useState } from "react";
import ChatBox from "../../Components/Chatbox/ChatBox";
import Conversation from "../../Components/Chats/Conversation";
import "./Chats.css";

const Chats = () => {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0]);
  return (
    <div className="chatContainer">
      <div className="chatLeft">
        <div className="chatSearch">
          <input type="text" placeholder="search user" />
          <button>Find</button>
        </div>
        <div className="convBox">
          <h3>Conversations</h3>
          {data.map((e) => {
            return <Conversation />;
          })}
        </div>
      </div>
      <div className="chatRight">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chats;
