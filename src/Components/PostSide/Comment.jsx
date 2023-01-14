import React, { useState } from "react";
import "./Comment.css";
const Comment = () => {
  const [text, setText] = useState("");
  const submitPost = () => {
    console.log(text);
  };
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
      <div className="comments">
        <img
          src="https://img.freepik.com/free-icon/user_318-725053.jpg"
          alt="comment"
        />
        <div className="commentInfo">
          <span>Commenter</span>
          <p>Commenter's comment</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
