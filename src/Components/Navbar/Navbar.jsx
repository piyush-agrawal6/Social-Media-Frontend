import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { GrChat } from "react-icons/gr";
// import { MdNotifications } from "react-icons/md";
// import { BsPeopleFill } from "react-icons/bs";
import { CgUserlane } from "react-icons/cg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import logo from "./logo.svg";
import sm from "./1.svg";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { MdHome } from "react-icons/md";
const Navbar = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {contextHolder}
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="logo2">
            <Link to="/">
              <img src={sm} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-item item-center"></div>

        <div className="nav-item item-right">
          <div className="navIcons">
            <Link to="/notifications">
              <MdHome className="sideIcons" />
              <p className="display">Home</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/profile">
              <CgUserlane className="sideIcons" />
              <p className="display">Profile</p>
            </Link>
          </div>
          {/* <div className="navIcons">
            <Link to="/chats">
              <GrChat className="sideIcons" />
              <p className="display">Chats</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/chats">
              <BsPeopleFill className="sideIcons" />
              <p className="display">People</p>
            </Link>
          </div> */}

          {/* <div className="navIcons">
            <Link to="/notifications">
              <MdNotifications className="sideIcons" />
              <span>1</span>
              <p className="display">Info</p>
            </Link>
          </div> */}
          {isAuthenticated ? (
            <div className="navIcons">
              <Link
                onClick={() => {
                  dispatch({ type: "AUTH_LOGOUT" });
                  success("logged out successfully");
                }}
              >
                <FiLogOut className="sideIcons" />
                <p className="display">Logout</p>
              </Link>
            </div>
          ) : (
            <div className="navIcons">
              <Link to="/signup">
                <FiLogIn className="sideIcons" />
                <p className="display">Signup</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
