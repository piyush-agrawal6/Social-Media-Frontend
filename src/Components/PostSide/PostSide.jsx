import React from "react";
import Post from "./Post";
import "./PostSide.css";
import StartPost from "./StartPost";

const PostSide = () => {
  return (
    <div className="postSide">
      <StartPost />
      <Post />
    </div>
  );
};

export default PostSide;
