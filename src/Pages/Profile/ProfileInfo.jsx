import React, { useState } from "react";
import "./ProfileInfo.css";
import { BiEdit } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Button, Modal } from "antd";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
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
