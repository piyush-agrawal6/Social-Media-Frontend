import { Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ChangePassword.css";
const ChangePassword = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleUserDelete = () => {
    //     dispatch(deleteUser(user._id, user.isAdmin));
  };
  return (
    <>
      <p onClick={showDrawer}>Change Password</p>
      <Drawer
        title="CHANGE PASSWORD"
        placement="left"
        onClose={onClose}
        open={open}
        className="changeDrawer"
      >
        <p>Enter Current Password</p>
        <input type="text" placeholder="Current Password" />
        <p>Enter New Password</p>
        <input type="text" placeholder="New Password" />
        <p>Confirm New Password</p>
        <input type="text" placeholder="Confirm Password" />
        <br />
        <button className="changeButton">Change</button>
      </Drawer>
    </>
  );
};

export default ChangePassword;
