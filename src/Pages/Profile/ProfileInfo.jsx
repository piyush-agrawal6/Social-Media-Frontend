import React, { useState } from "react";
import "./ProfileInfo.css";
import { BiEdit } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer, Modal } from "antd";
import {  updateUser } from "../../Redux/auth/action";
import DeleteUser from "../../Components/DeleteUser/DeleteUser";
import ChangePassword from "../../Components/ChangePassword/ChangePassword";
import { message } from "antd";
const ProfileInfo = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    gender: user.gender,
    relationship: user.relationship,
    livesin: user.livesin,
    workAt: user.workAt,
    userid: user._id,
    admin: user.isAdmin,
  });

  const [on, setOn] = useState(false);

  const showDrawer = () => {
    setOn(true);
  };

  const onClose = () => {
    setOn(false);
  };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const error = (text) => {
    messageApi.error(text);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    if (
      formData.name.trim() !== "" &&
      formData.workAt.trim() !== "" &&
      formData.livesin.trim() !== "" &&
      formData.relationship.trim() !== "" &&
      formData.username.trim() !== ""
    ) {
      if (formData.name.trim().length < 4) {
        error("Name must be at least of 4 characters");
      } else {
        dispatch(updateUser(formData, user._id));
        success("user updated");
        handleOk();
      }
    } else {
      error("Please enter all required fields");
    }
  };

  return (
    <div className="profileInfo">
      {contextHolder}
      <div className="infoHead">
        <h3>Your Info</h3>
        <p onClick={showModal}>
          Edit Info <BiEdit />
        </p>
        <Modal
          title="Edit details"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" onClick={handleFormSubmit}>
              Edit
            </Button>,
          ]}
        >
          <form className="inputForm">
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
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              name="relationship"
              value={formData.relationship}
              onChange={handleFormChange}
              type="text"
              placeholder="Enter relationship status"
            />
            <input
              name="workAt"
              value={formData.workAt}
              onChange={handleFormChange}
              type="text"
              placeholder="Workplace"
            />
            <input
              name="livesin"
              value={formData.livesin}
              onChange={handleFormChange}
              type="text"
              placeholder="Location"
            />
          </form>
        </Modal>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>{user.relationship ? user.relationship : "No data"}</span>
      </div>
      <div className="info">
        <span>
          <b>Gender</b>
        </span>
        <span>{user.gender !== "empty" ? user.gender : "No data"}</span>
      </div>
      <div className="info">
        <span>
          <b>Location</b>
        </span>
        <span>{user.livesin ? user.livesin : "No data"}</span>
      </div>
      <div className="info">
        <span>
          <b>Work As</b>
        </span>
        <span>{user.workAt ? user.workAt : "No data"}</span>
      </div>
      <div className="info" onClick={showDrawer}>
        <p>
          Account Settings
          <IoMdSettings />
        </p>
      </div>
      <Drawer
        title="Account Settings"
        placement="left"
        onClose={onClose}
        open={on}
        className="accountDrawer"
      >
        <DeleteUser />
        <ChangePassword />
        <p
          onClick={() => {
            dispatch({ type: "AUTH_LOGOUT" });
          }}
        >
          Logout
        </p>
      </Drawer>
    </div>
  );
};

export default ProfileInfo;
