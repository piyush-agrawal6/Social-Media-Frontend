import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../Redux/post/action";

const SinglePost = ({ e }) => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const [likes, setLikes] = useState(e.likes.includes(user._id));
  const [liked, setLiked] = useState(e.likes.length);

  const dispatch = useDispatch();
  const handleLike = (id) => {
    dispatch(likePost(id, user._id));
    setLikes(!likes);
    likes ? setLiked(liked - 1) : setLiked(liked + 1);
  };
  return (
    <div className="post">
      <img src={e.image} alt="" />
      <div className="postDetails">
        <b>{e.name}</b>
        <span>{e.desc}</span>
      </div>
      <div className="postReact">
        {likes ? (
          <div>
            {liked}
            <BsHeartFill
              onClick={() => {
                handleLike(e._id);
              }}
            />
          </div>
        ) : (
          <div>
            {liked}
            <BsHeart
              onClick={() => {
                handleLike(e._id);
              }}
            />
          </div>
        )}
        <div>
          <BiCommentDetail />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
