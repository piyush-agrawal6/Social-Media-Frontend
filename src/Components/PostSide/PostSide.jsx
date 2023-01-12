import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/post/action";
import Post from "./Post";
import "./PostSide.css";
import StartPost from "./StartPost";

const PostSide = () => {
  const { post } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postSide">
      <StartPost />
      <Post data={post} />
    </div>
  );
};

export default PostSide;
