import React from "react";
import Pro from "./img1.png";

const Followers = () => {
  return (
    <div className="followersCard">
      <h3>Your Followers</h3>
      <div className="followersDetail">
        <div>
          <img src={Pro} alt="" className="followersImg" />
          <div className="followersName">
            <span>Follower Name</span>
            <span>@Username</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className="followersDetail">
        <div>
          <img src={Pro} alt="" className="followersImg" />
          <div className="followersName">
            <span>Follower Name</span>
            <span>@Username</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className="followersDetail">
        <div>
          <img src={Pro} alt="" className="followersImg" />
          <div className="followersName">
            <span>Follower Name</span>
            <span>@Username</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className="followersDetail">
        <div>
          <img src={Pro} alt="" className="followersImg" />
          <div className="followersName">
            <span>Follower Name</span>
            <span>@Username</span>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <h3>See all followers</h3>
    </div>
  );
};

export default Followers;
