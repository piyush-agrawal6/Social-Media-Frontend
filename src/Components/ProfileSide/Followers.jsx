import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/auth/action";
import SingleFollower from "./SingleFollower";

const Followers = () => {
  const {
    allUser,
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="followersCard">
      <h3>Find new peoples</h3>
      {allUser?.map((e, i) => {
        if (e._id !== user._id) {
          return <SingleFollower e={e} key={i} />;
        }
      })}
    </div>
  );
};

export default Followers;
