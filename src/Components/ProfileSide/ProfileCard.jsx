import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  return (
    <div className="profileCard">
      <div className="profileImage">
        <img src={user.coverPicture} alt="coverPic" />
        <img src={user.profilePicture} alt="profilePic" />
      </div>
      <div className="profileName">
        <span>{user.name}</span>
        <span>{user.workAt ? user.workAt : "Profile Incomplete"}</span>
      </div>
      <div className="profileFollow">
        <hr />
        <div>
          <div className="profileFollowers">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine"></div>
          <div className="profileFollowers">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>
      <span className="profileLink">
        <Link to="/profile">Profile</Link>
      </span>
    </div>
  );
};

export default ProfileCard;
