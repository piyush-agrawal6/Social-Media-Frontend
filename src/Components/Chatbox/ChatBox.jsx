import React from "react";
import "./ChatBox.css";
import Conversation from "../Chats/Conversation";
import InputEmoji from "react-input-emoji";
const ChatBox = () => {
  return (
    <div className="chatBox">
      <div className="chatHead">
        <Conversation />
      </div>
      <div className="chatBody">
        <div className="message">
          <span>Hey how are you ??</span>
          <span>Text Time</span>
        </div>
        <div className="message own">
          <span>I am fine , what about you?</span>
          <span>Text Time</span>
        </div>
        <div className="message">
          <span>Hey how are you ??</span>
          <span>Text Time</span>
        </div>
        <div className="message own">
          <span>I am fine , what about you?</span>
          <span>Text Time</span>
        </div>
        <div className="message">
          <span>Hey how are you ??</span>
          <span>Text Time</span>
        </div>
        <div className="message own">
          <span>I am fine , what about you?</span>
          <span>Text Time</span>
        </div>
        <div className="message">
          <span>Hey how are you ??</span>
          <span>Text Time</span>
        </div>
        <div className="message own">
          <span>I am fine , what about you?</span>
          <span>Text Time</span>
        </div>
      </div>
      <div className="chatSender">
        <InputEmoji />
        <button className="chatSendBtn">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
