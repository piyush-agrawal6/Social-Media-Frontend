import { Drawer, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../Redux/auth/action";
import "./ChangePassword.css";
let ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    newpassword: "",
    oldpassword: "",
    confirmpassword: "",
  });

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
  let {
    data: { user },
    passwordChange,
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (passwordChange === "Password Changed") {
      success("Password Changed Successfully");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
    }
    if (passwordChange === "User Dosesn't exist") {
      info("User Doesn't exist");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
    }
    if (passwordChange === "Password Doesn't match.") {
      info("Wrong Password");
      dispatch({ type: "RESET_CHANGE_PASSWORD_SUCCESS" });
    }
  }, [dispatch, passwordChange]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePassChange = () => {
    if (formData.newpassword === formData.confirmpassword) {
      dispatch(
        changePassword(formData.oldpassword, user._id, formData.newpassword)
      );
    } else {
      info("Password does not match");
    }
  };
  return (
    <>
      <p onClick={showDrawer}>Change Password</p>
      {contextHolder}
      <Drawer
        title="CHANGE PASSWORD"
        placement="left"
        onClose={onClose}
        open={open}
        className="changeDrawer"
      >
        <p>Enter Current Password</p>
        <input
          value={formData.oldpassword}
          name="oldpassword"
          onChange={handleFormChange}
          type="text"
          placeholder="Current Password"
        />
        <p>Enter New Password</p>
        <input
          value={formData.newpassword}
          name="newpassword"
          onChange={handleFormChange}
          type="text"
          placeholder="New Password"
        />
        <p>Confirm New Password</p>
        <input
          value={formData.confirmpassword}
          name="confirmpassword"
          onChange={handleFormChange}
          type="text"
          placeholder="Confirm Password"
        />
        <br />
        <button onClick={handlePassChange} className="changeButton">
          Change
        </button>
      </Drawer>
    </>
  );
};

export default ChangePassword;
