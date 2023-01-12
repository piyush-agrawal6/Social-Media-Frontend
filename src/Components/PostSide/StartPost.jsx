import React, { useRef, useState } from "react";
import "./StartPost.css";
import { BsImage } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const StartPost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="postShare">
      <img
        src="https://avatars.githubusercontent.com/u/100460788?v=4"
        alt="profile"
      />
      <div className="postInput">
        <input type="text" placeholder="Start an interaction" />
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
          <button className="postShareButton">Share</button>
          <div className="postInput">
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={imageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <RxCross2 onClick={() => setImage(null)} />
            <img src={image.image} alt="img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StartPost;
