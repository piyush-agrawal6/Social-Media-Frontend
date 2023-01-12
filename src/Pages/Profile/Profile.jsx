import React, { useState } from "react";
import "./Profile.css";
import Followers from "../../Components/ProfileSide/Followers";
import ProfileCard from "../../Components/ProfileSide/ProfileCard";
import StartPost from "../../Components/PostSide/StartPost";
import Post from "../../Components/PostSide/Post";
import ProfileInfo from "./ProfileInfo";
import { Button, Modal } from 'antd';
const Profile = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  
  return (
    <div className="profilePage">
      <div className="profileMiddle">
        <ProfileCard />
        <ProfileInfo />
        <StartPost />
        <Post />
      </div>
      <div className="profileLeft">
        <ProfileInfo />
        <Followers />
      </div>
    </div>
  );
};

export default Profile;
