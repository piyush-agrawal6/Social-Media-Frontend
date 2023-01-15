import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Chats from "../Pages/Chats/Chats";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Profile from "../Pages/Profile/Profile";
const AllRoutes = () => {
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="home" /> : <Navigate to="signup" />
          }
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="../home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="../signup" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="../signup" />}
        />
        <Route
          path="/chats"
          element={isAuthenticated ? <Chats /> : <Navigate to="../signup" />}
        />
        <Route
          path="*"
          element={isAuthenticated ? <Home /> : <Navigate to="../signup" />}
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
