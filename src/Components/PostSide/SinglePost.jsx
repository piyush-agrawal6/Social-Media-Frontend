import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, likePost } from "../../Redux/post/action";
import Comment from "./Comment";
import { Button, message, Modal, Popconfirm } from "antd";
const SinglePost = ({ e }) => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const [likes, setLikes] = useState(e.likes.includes(user._id));
  const [formData, setFormData] = useState({
    caption: e.desc,
  });

  const dispatch = useDispatch();
  const confirmDelete = (id) => {
    dispatch(deletePost(id, user._id));
    message.success("Post Delete");
  };

  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(e.likes.length);
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
  const handleFormSubmit = (id) => {
    if (formData.caption.trim() !== "") {
      dispatch(editPost(id, user._id, formData.caption.trim()));
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
  const handleLike = (id) => {
    dispatch(likePost(id, user._id));
    setLikes(!likes);
    likes ? setLiked(liked - 1) : setLiked(liked + 1);
  };

  return (
    <div className="post">
      {e.userId === user._id ? (
        <p className="postEdit">
          <Popconfirm
            title="Delete the post"
            description="Are you sure to delete this post?"
            onConfirm={() => confirmDelete(e._id)}
          >
            <MdDelete />
          </Popconfirm>{" "}
          | <BiEdit onClick={showModal} />
          <Modal
            title="Edit Caption"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" onClick={() => handleFormSubmit(e._id)}>
                Edit
              </Button>,
            ]}
          >
            <form className="inputForm">
              <input
                name="caption"
                value={formData.caption}
                onChange={handleFormChange}
                type="text"
                placeholder="New Caption"
              />
            </form>
          </Modal>
        </p>
      ) : null}
      <img src={e.image} alt="" />
      <div className="postDetails">
        <b>{e.name}</b>
        <span>{e.desc}</span>
      </div>
      <div className="postReact">
        {likes ? (
          <div>
            {liked}
            <BsHeartFill
              onClick={() => {
                handleLike(e._id);
              }}
            />
          </div>
        ) : (
          <div>
            {liked}
            <BsHeart
              onClick={() => {
                handleLike(e._id);
              }}
            />
          </div>
        )}
        <div>
          {e.comment.length}
          <BiCommentDetail onClick={() => setCommentOpen(!commentOpen)} />
        </div>
      </div>
      {commentOpen && <Comment data={e.comment} e={e._id} />}
    </div>
  );
};

export default SinglePost;
