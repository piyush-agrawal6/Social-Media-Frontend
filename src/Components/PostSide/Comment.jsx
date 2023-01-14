import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, postComment } from "../../Redux/post/action";
import "./Comment.css";
const Comment = ({ data, e }) => {
  const [text, setText] = useState("");
  const [com, setCom] = useState(data);
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const submitPost = () => {
    let data = {
      comment: text,
      id: user._id,
      image: user.profilePicture,
      name: user.name,
    };
    dispatch(postComment(data, e));
  };
  const {post} = useSelector((store) => store.post);
  useEffect(() => {
    console.log("first");
  }, [dispatch, post]);
  return (
    <div>
      <div className="writeComment">
        <img
          src="https://img.freepik.com/free-icon/user_318-725053.jpg"
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
      {com?.map((elem, i) => {
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
