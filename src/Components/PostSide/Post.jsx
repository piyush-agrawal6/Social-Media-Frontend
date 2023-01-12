import React, { useEffect, useState } from "react";
import "./Post.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getPost, userPost } from "../../Redux/post/action";
const Post = ({ data }) => {
  const [like, setLike] = useState(false);
  // const { post } = useSelector((store) => store.post);
  // console.log(post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div className="postsBox">
      {data?.map((e, i) => {
        return (
          <div className="post" key={i}>
            <img src={e.image} alt="" />
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
              <span>{e.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
