import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signupimg from "./signup.png";
import { registerUser } from "../../Redux/auth/action";
import { message } from "antd";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "empty",
  });
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth.userRegister);
  const { userRegister } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const info = (text) => {
    messageApi.info(text);
  };

  const error = (text) => {
    messageApi.error(text);
  };
  React.useEffect(() => {
    if (authState.message === "User already exist") {
      info("User already exist, please log in.");
      dispatch({ type: "AUTH_REGISTER_RESET" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    if (authState.message === "Successful") {
      dispatch({ type: "AUTH_REGISTER_RESET" });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }, [dispatch, navigate, authState.message, info]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.username.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      if (
        formData.name.trim().length < 4 ||
        formData.password.trim().length < 4
      ) {
        error("Name and password must be at least of 4 characters");
      } else {
        dispatch(registerUser(formData));
      }
    } else {
      info("Please enter all required fields");
    }
  };

  return (
    <div className="signup">
      {contextHolder}
      <div className="signupContainer">
        <div className="signupImage">
          <h1>LETS DIVERSIFY.</h1>
          <img src={signupimg} alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <input
                name="username"
                value={formData.username}
                onChange={handleFormChange}
                type="text"
                placeholder="@username"
              />
              <select name="gender" onChange={handleFormChange}>
                <option value="empty">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter email"
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                type="password"
                placeholder="Set a password"
              />
              <p>
                Already a User ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">
                {userRegister.loading ? "Loading" : "CONTINUE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
