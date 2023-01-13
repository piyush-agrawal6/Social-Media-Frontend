import React, { useEffect } from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import { getPost } from "../../Redux/post/action";
import SinglePost from "./SinglePost";
import img from "./nopost.webp";
const Post = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postsBox">
      {data.length > 0 ? (
        data.map((e, i) => {
          return <SinglePost e={e} key={i} />;
        })
      ) : (
        <div className="noPost">
          <img src={img} alt="" />
        </div>
      )}
    </div>
  );
};

export default Post;
