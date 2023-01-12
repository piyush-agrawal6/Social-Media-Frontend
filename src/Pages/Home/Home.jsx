import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="homePage">
      <ProfileSide />
      <PostSide />
    </div>
  );
};

export default Home;
