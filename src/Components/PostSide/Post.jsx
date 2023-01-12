import React, { useState } from "react";
import "./Post.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
const Post = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="postsBox">
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1673207559693-705d2a40d4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className="postReact">
          {like ? (
            <BsHeart onClick={() => setLike(!like)} />
          ) : (
            <BsHeartFill onClick={() => setLike(!like)} />
          )}
          <BiCommentDetail />
        </div>
        <span>300 Likes</span>
        <div className="postDetails">
          <span>
            <b>Joy Agrawal</b>
          </span>
          <span>
            MERN Stack Social Media App Tutorial | React Node.js full Course for
          </span>
        </div>
      </div>
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1673263252923-deee17ca8cb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="postReact">
          {like ? (
            <BsHeart onClick={() => setLike(!like)} />
          ) : (
            <BsHeartFill onClick={() => setLike(!like)} />
          )}
          <BiCommentDetail />
        </div>
        <span>300 Likes</span>
        <div className="postDetails">
          <span>
            <b>Joy Agrawal</b>
          </span>
          <span>
            MERN Stack Social Media App Tutorial | React Node.js full Course for
          </span>
        </div>
      </div>
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1513507051-c277fe70c8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="postReact">
          {like ? (
            <BsHeart onClick={() => setLike(!like)} />
          ) : (
            <BsHeartFill onClick={() => setLike(!like)} />
          )}
          <BiCommentDetail />
        </div>
        <span>300 Likes</span>
        <div className="postDetails">
          <span>
            <b>Joy Agrawal</b>
          </span>
          <span>
            MERN Stack Social Media App Tutorial | React Node.js full Course for
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
