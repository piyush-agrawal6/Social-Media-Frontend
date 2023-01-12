import React, { useEffect } from "react";
import "./Profile.css";
import Followers from "../../Components/ProfileSide/Followers";
import ProfileCard from "../../Components/ProfileSide/ProfileCard";
import StartPost from "../../Components/PostSide/StartPost";
import Post from "../../Components/PostSide/Post";
import ProfileInfo from "./ProfileInfo";
import { useDispatch, useSelector } from "react-redux";
import { userPost } from "../../Redux/post/action";
const Profile = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const { myPost } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPost(user._id));
  }, [dispatch, user._id]);
  return (
    <div className="profilePage">
      <div className="profileMiddle">
        <ProfileCard />
        <diV className="hide">
          <ProfileInfo />
        </diV>
        <StartPost />
        <Post data={myPost} />
      </div>
      <div className="profileLeft">
        <ProfileInfo />
        <Followers />
      </div>
    </div>
  );
};

export default Profile;