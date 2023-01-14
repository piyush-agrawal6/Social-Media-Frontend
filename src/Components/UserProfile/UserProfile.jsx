import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import "./UserProfile.css";
import { RxCross2 } from "react-icons/rx";
import { updateUser } from "../../Redux/auth/action";
import { message } from "antd";
const UserProfile = () => {
  const {
    data: { user },
  } = useSelector((store) => store.auth);
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const error = (text) => {
    messageApi.error(text);
  };
  const { myPost } = useSelector((store) => store.post);
  const imageRef = useRef();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
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
  const dispatch = useDispatch();
  const updateCover = (e) => {
    e.preventDefault();
    if (image == null) {
      return error("Please select a file");
    }
    const coverData = {
      coverPicture: image,
      userid: user._id,
    };
    dispatch(updateUser(coverData, user._id));
    success("Profile updated`");
    setImg(null);
  };
  const updateProfile = (e) => {
    e.preventDefault();
    if (image == null) {
      return alert("Please select a file");
    }
    const profileData = {
      profilePicture: image,
      userid: user._id,
    };
    dispatch(updateUser(profileData, user._id));
    success("Profile updated`");
    setImg(null);
  };
  return (
    <div className="profileCard">
      {contextHolder}
      <div className="userProfile">
        <img src={user.coverPicture} alt="coverPic" />
        <img
          onClick={() => imageRef.current.click()}
          src={user.profilePicture}
          alt="profilePic"
        />
        <p onClick={() => imageRef.current.click()}>
          Edit <AiOutlineEdit />
        </p>
      </div>
      <div className="userProfileName">
        <span>{user.name}</span>
        <span>{user.workAt ? user.workAt : "Profile Incomplete"}</span>
      </div>
      <div className="profileFollow">
        <hr />
        <div>
          <div className="profileFollowers">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="verticalLine"></div>
          <div className="profileFollowers">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="verticalLine"></div>
          <div className="profileFollowers">
            <span>{myPost.length}</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="profilePic">
        <p onClick={() => imageRef.current.click()}>
          Edit Profile <AiOutlineEdit />
        </p>
        <div className="profileInput">
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={imageChange}
          />
        </div>
        {img && (
          <div className="previewProfileImage">
            <RxCross2 onClick={() => setImg(null)} />
            <p>Profile Preview</p>
            <img
              className="previewProfile"
              src={URL.createObjectURL(img)}
              alt="img"
            />
            <br />
            <p>Cover Preview</p>
            <img
              className="previewCover"
              src={URL.createObjectURL(img)}
              alt="img"
            />
            <br />
            {loading ? (
              <button>Loading</button>
            ) : (
              <div>
                <button onClick={updateCover}>Update Cover Pic</button>
                <button onClick={updateProfile}>Update Profile Pic</button>
                <button onClick={() => setImg(null)}>Cancel</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
