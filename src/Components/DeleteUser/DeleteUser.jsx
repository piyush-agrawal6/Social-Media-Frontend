import { Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/auth/action";
import "./DeleteAccount.css";
const DeleteUser = () => {
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
      <p onClick={showDrawer}>Delete Account </p>
      <Drawer
        title="DELETE ACCOUNT"
        placement="left"
        onClose={onClose}
        open={open}
        className="deleteDrawer"
      >
        <p>Enter Your Password</p>
        <input type="text" placeholder="Password" />
        <br />
        <button className="deleteButton">Delete</button>
      </Drawer>
    </>
  );
};

export default DeleteUser;
