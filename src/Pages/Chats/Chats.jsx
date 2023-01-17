import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../../Components/Chatbox/ChatBox";
import Conversation from "../../Components/Chats/Conversation";
import { userChats } from "../../Redux/chats/action";
import "./Chats.css";
import { io } from "socket.io-client";
const Chats = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://socket-io-fkjy.onrender.com/");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(userChats(user._id)).then((res) => setChats(res.data.chats));
    } catch (error) {
      console.log(error);
    }
  }, [user, dispatch]);

  return (
    <div className="chatContainer">
      <div className="chatLeft">
        <div className="convBox">
          <h3>Conversations</h3>
          {chats?.map((chat, i) => (
            <div onClick={() => setCurrentChat(chat)} key={i}>
              <Conversation data={chat} userId={user._id} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatRight">
        <ChatBox data={currentChat} userId={user._id} />
      </div>
    </div>
  );
};

export default Chats;
