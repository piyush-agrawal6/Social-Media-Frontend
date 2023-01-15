import { Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../Redux/auth/action";
import "./ChangePassword.css";
const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    newpassword: "",
    oldpassword: "",
    confirmpassword: "",
  });
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

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePassChange = () => {
    console.log(formData);
    if (formData.newpassword === formData.confirmpassword) {
      dispatch(
        changePassword(formData.oldpassword, user._id, formData.newpassword)
      );
    } else {
      alert("Password does not match");
    }
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
