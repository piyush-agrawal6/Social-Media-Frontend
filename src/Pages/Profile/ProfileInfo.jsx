import React, { useState } from "react";
import "./ProfileInfo.css";
import { BiEdit } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Button, Modal } from "antd";

const ProfileInfo = () => {
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

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="profileInfo">
      <div className="infoHead">
        <h3>Your Info</h3>
        <p onClick={showModal}>
          Edit Info <BiEdit />
        </p>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        ></Modal>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>Single AF</span>
      </div>
      <div className="info">
        <span>
          <b>Gender</b>
        </span>
        <span>Male</span>
      </div>
      <div className="info">
        <span>
          <b>Location</b>
        </span>
        <span>Odisha</span>
      </div>
      <div className="info">
        <span>
          <b>Work As</b>
        </span>
        <span>MERN Stack dev</span>
      </div>
      <div className="info">
        <p>
          Account Settings
          <IoMdSettings />
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
