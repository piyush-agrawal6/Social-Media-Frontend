import React from "react";
import "./ProfileSide.css";
import Pro from "./img1.png";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <div className="profileCard">
        <div className="profileImage">
          <img
            src="https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <img src="https://avatars.githubusercontent.com/u/100460788?v=4" alt="" />
        </div>
        <div className="profileName">
          <span>Joy's Profile</span>
          <span>MERN Stack Developer</span>
        </div>
        <div className="profileFollow">
          <hr />
          <div>
            <div className="profileFollowers">
              <span>69</span>
              <span>Followers</span>
            </div>
            <div className="verticalLine"></div>
            <div className="profileFollowers">
              <span>0</span>
              <span>Followings</span>
            </div>
          </div>
          <hr />
        </div>
        <span>Profile</span>
      </div>
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
      </div>
    </div>
  );
};

export default ProfileSide;
