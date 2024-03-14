import React, { useContext, useState, useEffect } from "react";
import "./ReviewCard.css";

import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { User, ShareIcon, HLine } from "../../assets";
import Share from "../Share/Share";

import { MyContext } from "../../MyContext";
import axios from "axios";

const ReviewCard = ({
  username,
  userId,
  profile,
  date,
  time,
  feedback,
  isAnonymous,
}) => {
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // eslint-disable-next-line
  const [description, setDescription] = useState(feedback);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const { isShareOpen, setIsShareOpen } = useContext(MyContext);

  const [college, setCollege] = useState([]);
  const [anonymous, setAnonymous] = useState(username);

  // eslint-disable-next-line
  const [feedbackTime, setFeedbackTime] = useState("");

  const shareClicked = () => {
    setIsShareOpen(!isShareOpen);
  };

  const invertBookMarked = () => {
    setIsBookMarked(!isBookMarked);
  };
  const invertLiked = () => {
    setIsLiked(!isLiked);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleOption1 = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/user/getSingleUser/${userId}`, {
        crossdomain: true,
      })
      .then((response) => {
        // console.log(response.data.user);
        setCollege(response.data.user.college);
        setFeedbackTime(response.data.user.createdAt);
        if (isAnonymous !== "true") {
          setAnonymous(response.data.user.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="reviewCard">
      <div className="reviewCard__head">
        <div className="reviewCard__head-left">
          <div className="reviewCard__head-left-profile">
            {profile ? (
              <img
                src={require(profile)}
                alt="User img"
                className="reviewCard__head-left-profileIcon"
              />
            ) : (
              <img
                src={User}
                alt="User img"
                className="reviewCard__head-left-profileIcon"
              />
            )}
          </div>
          <div className="reviewCard__head-left-details">
            <h2 className="reviewCard__head-left-details-Username">
              {anonymous} . <span> {date} .</span>
              <span> {time}</span>
            </h2>
            <h2 className="reviewCard__head-left-details-College">
              Student At {college}
            </h2>
          </div>
        </div>
        <div className="reviewCard__head-right">
          {!isBookMarked ? (
            <BsBookmark
              className="reviewCard__head-right-bookmark"
              onClick={invertBookMarked}
            />
          ) : (
            <BsFillBookmarkCheckFill
              className="reviewCard__head-right-bookmark"
              onClick={invertBookMarked}
            />
          )}
          <BiDotsVerticalRounded
            className="reviewCard__head-right-dot"
            onClick={toggleOption1} 
          />
          <div
            className={`${
              isOptionOpen ? "reviewCard__head-right-dot-click " : "hide"
            }`}
          >
            <div className="reviewCard__head-right-dot-click-box ">
              <p className="reviewCard__head-right-dot-click-box-text">
                Report content
              </p>
              <hr />
              <p className="reviewCard__head-right-dot-click-box-text">
                Send a private message
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewCard__body">
        <p>
          {showFullDescription ? description : description.slice(0, 200)}
          {description.length > 200 && (
            <span
              onClick={toggleDescription}
              className="reviewCard__body-feedback"
            >
              {showFullDescription ? " ...less" : " more..."}
            </span>
          )}
        </p>
      </div>
      <div className="reviewCard__interact">
        <div className="reviewCard__interact-like" onClick={invertLiked}>
          {!isLiked ? (
            <AiOutlineHeart className="reviewCard__interact-likeIcon" />
          ) : (
            <AiFillHeart className="reviewCard__interact-likeIcon" />
          )}

          <h2 className="reviewCard__interact-likeText">Like</h2>
        </div>
        <div className="reviewCard__interact-share" onClick={shareClicked}>
          <img
            src={ShareIcon}
            alt="Share Icon"
            className="reviewCard__interact-shareIcon"
          />
          <h2 className="reviewCard__interact-interact-shareText">Share</h2>
        </div>
      </div>
      <div>
        <img
          src={HLine}
          alt="Hprizontal Line"
          className="reviewCard__horizontalLine"
        />
      </div>
      {isShareOpen && (
        <div className="div">
          <div className="showWindow__backgound " onClick={shareClicked}></div>
          <div className="shareWindow ">
            <Share />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
