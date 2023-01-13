import React, { useEffect } from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/post/action";
import SinglePost from "./SinglePost";
const Post = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postsBox">
      {data?.map((e, i) => {
        return <SinglePost e={e} key={i} />;
      })}
    </div>
  );
};

export default Post;
