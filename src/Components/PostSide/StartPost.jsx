import React, { useRef, useState } from "react";
import "./StartPost.css";
import { BsImage } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../Redux/post/action";

const StartPost = () => {
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const imageChange = async (e) => {
    const files = e.target.files;
    setImg(e.target.files[0]);
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "diverse");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diverse/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image == null) {
      return alert("Please select a file");
    }
    let postData = {
      userId: user._id,
      desc,
      image,
    };
    dispatch(createPost(postData));
    setDesc("");
    setImage(null);
    setImg("");
  };
  return (
    <div className="postShare">
      <img
        src="https://avatars.githubusercontent.com/u/100460788?v=4"
        alt="profile"
      />
      <div className="postInput">
        <input
          value={desc}
          onChange={({ target }) => setDesc(target.value)}
          type="text"
          placeholder="Start an interaction"
        />
        <div className="postOptions">
          <div
            className="postOptionIcon"
            onClick={() => imageRef.current.click()}
          >
            <BsImage /> <span>Photo</span>
          </div>
          <div className="postOptionIcon">
            <MdVideoLibrary />
            <span>Video</span>
          </div>
          <div className="postOptionIcon">
            <SlCalender />
            <span>Schedule</span>
          </div>
          {loading ? (
            "Loading"
          ) : (
            <button className="postShareButton" onClick={handleSubmit}>
              Share
            </button>
          )}
          <div className="postInput">
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={imageChange}
            />
          </div>
        </div>
        {img && (
          <div className="previewImage">
            <RxCross2 onClick={() => setImg(null)} />
            <img src={URL.createObjectURL(img)} alt="img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StartPost;
