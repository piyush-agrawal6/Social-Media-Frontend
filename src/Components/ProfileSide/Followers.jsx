import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, getUser, unfollowUser } from "../../Redux/auth/action";

const Followers = () => {
  const {
    allUser,
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleFollow = (id) => {
    dispatch(unfollowUser(id, user));
  };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="followersCard">
      <h3>Find new peoples</h3>
      {allUser?.map((e, i) => {
        if (e._id !== user._id) {
          return (
            <div className="followersDetail" key={i}>
              <div>
                <img src={e.profilePicture} alt="" className="followersImg" />
                <div className="followersName">
                  <span>{e.name}</span>
                  <span>{e.username}</span>
                </div>
              </div>
              <button onClick={() => handleFollow(e._id)}>Follow</button>
            </div>
          );
        }
      })}
      <h3>See all of them</h3>
    </div>
  );
};

export default Followers;
