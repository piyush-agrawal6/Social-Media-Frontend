import { Button, message, Modal, Popconfirm } from "antd";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../Redux/post/action";
import "./Comment.css";
const Comment = ({ data, e }) => {
  const [comments, setComments] = useState(data);
  const [text, setText] = useState("");
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const [formData, setFormData] = useState({
    comment: e.desc,
  });
  const confirmDelete = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancelDelete = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = useState(false);
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleFormSubmit = () => {
    if (formData.caption.trim() !== "") {
      message.success("Post updated");
      handleOk();
    } else {
      message.error("Please enter a new caption");
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  const submitPost = () => {
    let data = {
      comment: text,
      id: user._id,
      image: user.profilePicture,
      name: user.name,
    };
    dispatch(postComment(data, e));
    setComments([...comments, data]);
    success("Comment posted successfully");
  };

  return (
    <div>
      {contextHolder}
      <div className="writeComment">
        <img src={user.profilePicture} alt="comment" />
        <input
          value={text}
          onChange={({ target }) => setText(target.value)}
          type="text"
          placeholder="Write a comment"
        />
        <button onClick={submitPost}>Post</button>
      </div>
      {comments?.map((elem, i) => {
        return (
          <div className="comments" key={i}>
            <img src={elem.image} alt="comment" />
            <div className="commentInfo">
              <span>{elem.name}</span>
              <p>{elem.comment}</p>
              {elem.id === user._id ? (
                <div className="commentEdit">
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                    okText="Yes"
                    cancelText="No"
                  >
                    <MdDelete />
                  </Popconfirm>{" "}
                  <BiEdit onClick={showModal} />
                  <Modal
                    title="Edit Comment"
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
                        name="comment"
                        value={formData.caption}
                        onChange={handleFormChange}
                        type="text"
                        placeholder="New Comment"
                      />
                    </form>
                  </Modal>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
