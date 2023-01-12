import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImage">
        <img
          src="https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://avatars.githubusercontent.com/u/100460788?v=4"
          alt=""
        />
      </div>
      <div className="profileName">
        <span>Joy's Profile</span>
        <span>MERN Stack Developer</span>
      </div>
      <div className="profileFollow">
        <hr />
        <div>
          <div className="profileFollowers">
            <span>69</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine"></div>
          <div className="profileFollowers">
            <span>0</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>
      <span>
        <Link to="/profile">Profile</Link>
      </span>
    </div>
  );
};

export default ProfileCard;
