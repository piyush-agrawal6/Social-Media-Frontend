import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../Redux/auth/action";

const SingleFollower = ({ e }) => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const [following, setFollowing] = useState(e.followers.includes(user._id));
  const dispatch = useDispatch();
  const handleFollow = (id) => {
    following
      ? dispatch(unfollowUser(id, user))
      : dispatch(followUser(id, user));
    setFollowing(!following);
  };
  return (
    <div className="followersDetail">
      <div>
        <img src={e.profilePicture} alt="" className="followersImg" />
        <div className="followersName">
          <span>{e.name}</span>
          <span>@`{e.username}</span>
        </div>
      </div>
      <button onClick={() => handleFollow(e._id)} className={following?"unfollowBtn":"followBtn"}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default SingleFollower;
