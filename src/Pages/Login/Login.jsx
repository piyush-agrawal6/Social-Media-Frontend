import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import loginIng from "./login.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../Redux/auth/action";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  console.log("authState: ", authState);

  React.useEffect(() => {
    if (authState.userLogin.message === "User does not exist") {
    }
    if (authState.userLogin.message === "Wrong Password") {
      alert("Wrong");
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "Successful") {
      // dispatch(getCart());
      dispatch({ type: "AUTH_LOGIN_RESET" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [dispatch, navigate, authState]);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(formData));
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
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
              <button type="submit">CONTINUE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
