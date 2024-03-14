import React, { useContext, useEffect, useState } from "react";
import "./PostCreation.css";

import { User, User1 } from "../../assets";

import { MyContext } from "../../MyContext";
import axios from "axios";

const PostCreation = ({ username, college, profile }) => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [inputData, setInputData] = useState("");

  const { loggedUser, setCreatePost } = useContext(MyContext);

  // const [feedbackData, setFeedbackData] = useState([]);

  const submitFeedback = async () => {
    axios
      .post("http://localhost:8000/api/v1/feedback/createFeedback", {
        userId: loggedUser._id,
        feedback: inputData,
        anonymous: `${isAnonymous}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setCreatePost(false);
    window.location.reload(false);
  };

  const handleCheckboxChange = () => {
    setIsAnonymous(!isAnonymous);
  };
  return (
    <div className="postCreation">
      <div className="postCreation-top">
        <div className="postCreation-top-left">
          <img
            src={isAnonymous ? User : User1}
            alt="Profile Icon"
            className="postCreation-top-left-profile"
          />
          <div className="postCreation-top-left-details">
            <h1 className="postCreation-top-left-details-name">
              {isAnonymous ? "Anonymous" : loggedUser.name}
            </h1>
            <p className="postCreation-top-left-details-college">
              Student at {loggedUser.college}
            </p>
          </div>
        </div>
        <div className="postCreation-top-right">
          <p
            className="postCreation-top-right-desc"
            onClick={handleCheckboxChange}
          >
            Make the post anonymous
          </p>
          <div className="postCreation-top-right-checkbox-container box_1">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={handleCheckboxChange}
              className="postCreation-top-right-checkbox"
            />
          </div>
        </div>
      </div>
      <div className="postCreation-middle-cover">
        <div className="postCreation-middle">
          <textarea
            id="writeReview"
            name="writeReview"
            rows="4"
            cols="50"
            className="postCreation-middle-textArea"
            placeholder="Type here..."
            onChange={(event) => {
              setInputData(event.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="postCreation-bottom-cover" onClick={submitFeedback}>
        <div className="postCreation-bottom">
          <p className="postCreation-buttom-button">Post</p>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
