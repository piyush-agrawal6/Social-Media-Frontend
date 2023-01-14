import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, postComment } from "../../Redux/post/action";
import "./Comment.css";
const Comment = ({ data, e }) => {
  const [text, setText] = useState("");
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const submitPost = () => {
    let data = {
      comment: text,
      id: user._id,
      image: user.profilePicture,
      name: user.name,
    };
    dispatch(postComment(data, e));
    success("Comment posted successfully");
  };

  return (
    <div>
      {contextHolder}
      <div className="writeComment">
        <img
          src={user.profilePicture}
          alt="comment"
        />
        <input
          value={text}
          onChange={({ target }) => setText(target.value)}
          type="text"
          placeholder="Write a comment"
        />
        <button onClick={submitPost}>Post</button>
      </div>
      {data?.map((elem, i) => {
        return (
          <div className="comments" key={i}>
            <img src={elem.image} alt="comment" />
            <div className="commentInfo">
              <span>{elem.name}</span>
              <p>{elem.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
