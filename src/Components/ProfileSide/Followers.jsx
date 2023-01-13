import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/auth/action";

const Followers = () => {
  const { allUser } = useSelector((store) => store.auth);
  console.log(allUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="followersCard">
      <h3>Find new peoples</h3>
      {allUser?.map((e, i) => {
        return (
          <div className="followersDetail">
            <div>
              <img src={e.profilePicture} alt="" className="followersImg" />
              <div className="followersName">
                <span>{e.name}</span>
                <span>{e.username}</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
        );
      })}
      <h3>See all of them</h3>
    </div>
  );
};

export default Followers;
