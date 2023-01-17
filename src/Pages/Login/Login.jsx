import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import loginIng from "./login.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../Redux/auth/action";
import { message } from "antd";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const info = (text) => {
    messageApi.info(text);
  };
  const success = (text) => {
    messageApi.success(text);
  };
  const error = (text) => {
    messageApi.error(text);
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { userLogin } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (authState.userLogin.message === "User doesn't Exist") {
      error("User does not exist");
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "Wrong Password") {
      error("Incorrect Credentials");
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "User Login Successful") {
      success("Login Successful");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [dispatch, navigate, authState, error]);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      if (formData.password.trim().length < 4) {
        error("Password must be at least of 4 characters");
      } else {
        dispatch(authLogin(formData));
      }
    } else {
      info("Please enter all required fields");
    }
  };
  return (
    <div className="login">
      {contextHolder}
      <div className="loginContainer">
        <div className="loginImage">
          <h1>HEY THERE !</h1>
          <img src={loginIng} alt="" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
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
                New User ? <Link to="/signup">Signup .</Link>
              </p>
              <button type="submit">
                {userLogin.loading ? "Loading" : "CONTINUE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
