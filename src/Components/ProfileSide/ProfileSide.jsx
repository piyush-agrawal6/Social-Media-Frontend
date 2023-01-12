import React from "react";
import "./ProfileSide.css";
import Followers from "./Followers";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <ProfileCard />
      <Followers />
    </div>
  );
};

export default ProfileSide;
