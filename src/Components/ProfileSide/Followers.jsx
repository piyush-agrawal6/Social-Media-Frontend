import React from "react";
import { useSelector } from "react-redux";
import Pro from "./img1.png";

const Followers = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  return (
    <div className="followersCard">
      <h3>Find new peoples</h3>
      <div className="followersDetail">
        <div>
          <img src={Pro} alt="" className="followersImg" />
          <div className="followersName">
            <span>{user.name}</span>
            <span>{user.username}</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <h3>See all of them</h3>
    </div>
  );
};

export default Followers;
