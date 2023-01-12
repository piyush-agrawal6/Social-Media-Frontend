import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GrChat } from "react-icons/gr";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CgUserlane } from "react-icons/cg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import logo from "./logo.svg";
import sm from "./1.svg";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleClick = (param = "", value = "") => {
    setClick(!click);
    if (param === "" || value === "") {
      setClick(!click);
    } else if (param === "all") {
      return navigate("/product");
    } else {
      return navigate(`/product?${param}=${value}`);
    }
  };

  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };
  return (
    <div className="container">
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
        <div className="nav-item item-center">
          <nav className="menu" style={click ? styleB : styleA}>
            <ul className="menu-main">
              <p className="mobItem">
                <Link>Profile Setting</Link>
                <MdClose className="cross" onClick={() => handleClick()} />
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">
                  {isAuthenticated ? <p>Logout</p> : "Signup"}
                </Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/admin">Admin</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/profile">Profile</Link>
              </p>
            </ul>
          </nav>
        </div>
        <div className="nav-item item-right">
          <div className="navIcons">
            <Link to="/profile">
              <CgUserlane className="sideIcons" />
              <p className="display">Profile</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/chats">
              <GrChat className="sideIcons" />
              <p className="display">Chats</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/notifications">
              <MdNotifications className="sideIcons" />
              <span>1</span>
              <p className="display">Info</p>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="navIcons  hideAt">
              <Link
                onClick={() => {
                  dispatch({ type: "AUTH_LOGOUT" });
                }}
              >
                <FiLogOut className="sideIcons" />
                <p className="display">Logout</p>
              </Link>
            </div>
          ) : (
            <div className="navIcons  hideAt">
              <Link to="/signup">
                <FiLogIn className="sideIcons" />
                <p className="display">Signup</p>
              </Link>
            </div>
          )}
          <div className="navIcons  hideAt">
            <Link to="/setting">
              <IoMdSettings className="sideIcons" />
              <p className="display">Setting</p>
            </Link>
          </div>
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
