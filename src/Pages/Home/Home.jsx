import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import { getPost } from "../../Redux/post/action";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
    dispatch({ type: "AUTH_LOGIN_RESET" });
    dispatch({ type: "AUTH_REGISTER_RESET" });
  }, [dispatch]);
  return (
    <div className="homePage">
      <ProfileSide />
      <PostSide />
    </div>
  );
};

export default Home;
