import { Drawer, message } from "antd";
import Password from "antd/es/input/Password";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/auth/action";
import "./DeleteAccount.css";
const DeleteUser = () => {
  const [open, setOpen] = useState(false);
  const [password, setText] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const info = (text) => {
    messageApi.info(text);
  };
  const success = (text) => {
    messageApi.success(text);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    data: { user },
    deleteMessage,
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (deleteMessage === "User Deleted Successfully") {
      success("User Deleted Successfully");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
      dispatch({ type: "AUTH_LOGOUT" });
    }
    if (deleteMessage === "User Doesn't exist") {
      info("User Doesn't exist");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
    }
    if (deleteMessage === "Password Doesn't match.") {
      info("Wrong password");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
    }
  }, [dispatch, deleteMessage]);

  const handleUserDelete = () => {
    if (password === "") {
      info("Enter your password");
    } else {
      dispatch(deleteUser(password, user._id));
    }
  };

  return (
    <>
      <p onClick={showDrawer}>Delete Account </p>
      {contextHolder}
      <Drawer
        title="DELETE ACCOUNT"
        placement="left"
        onClose={onClose}
        open={open}
        className="deleteDrawer"
      >
        <p>Enter Your Password</p>
        <input
          value={password}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <br />
        <button onClick={handleUserDelete} className="deleteButton">
          Delete
        </button>
      </Drawer>
    </>
  );
};

export default DeleteUser;
