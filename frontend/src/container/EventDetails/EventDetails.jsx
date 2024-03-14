import React, { useContext, useState } from "react";
import "./EventDetails.css";

import { AiFillCaretLeft } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FiDollarSign } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";

import { MyContext } from "../../MyContext";

const EventDetails = ({
  eventName,
  eventDates,
  feesDetails,
  collegeName,
  description,
  location,
  image,
}) => {
  const [isBookMarked, setIsBookMarked] = useState(false);

  const { setIsEventPageOpen } = useContext(MyContext);

  const toggleBookMark = () => {
    setIsBookMarked(!isBookMarked);
  };

  const offEventsDetails = () => {
    setIsEventPageOpen(false);
  };

  // eslint-disable-next-line
  const [descriptions, setDescriptions] = useState(description);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="eventDetails">
      <div className="eventDetails-top">
        <div className="evetDetails-top-cover">
          <div className="eventDetails-top-left">
            <AiFillCaretLeft
              className="eventDetails-top-left-Icon"
              onClick={offEventsDetails}
            />
          </div>
          <div className="eventDetails-top-middle">
            <img
              src={`${image}`}
              alt="Events img"
              className="eventDetails-top-middle-image"
            />
          </div>
        </div>
        <div className="eventDetails-top-right">
          <div className="eventDetails-top-right-top">
            <div className="eventDetails-top-right-top-left">
              <h1 className="eventDetails-top-right-top-left-eventName">
                {eventName}
              </h1>
            </div>
            <div className="eventDetails-top-right-top-right">
              {isBookMarked ? (
                <BsFillBookmarkCheckFill
                  className="eventDetails-top-right-top-right-bookmark"
                  onClick={toggleBookMark}
                />
              ) : (
                <BsBookmark
                  className="eventDetails-top-right-top-right-bookmark"
                  onClick={toggleBookMark}
                />
              )}
              <BiDotsVerticalRounded className="eventDetails-top-right-top-right-dot" />
            </div>
          </div>
          <div className="eventDetails-top-right-middle">
            <SlCalender className="eventDetails-top-right-middle-calender" />
            <div className="eventDetails-top-right-middle-date-details">
              <h2 className="eventDetails-top-right-middle-date">Dates: </h2>
              {eventDates?.map((date) => {
                return (
                  <span className="eventDetails-top-right-middle-date-real">
                    {date}{" "}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="eventDetails-top-right-bottom">
            <div className="eventDetails-top-right-bottom-title">
              <FiDollarSign className="eventDetails-top-right-bottom-title-dollarIcon" />
              <h2 className="eventDetails-top-right-bottom-title-entryfees">
                Entry fee :{" "}
              </h2>
            </div>
            <div className="eventDetails-top-right-bottom-title-entryfees-cover">
              {feesDetails?.map((fees) => {
                return (
                  <p className="eventDetails-top-right-bottom-title-entryfees-cover-fees">
                    {fees}
                  </p>
                );
              })}
            </div>
            <div className="eventDetails-top-right-bottom-note">
              <h2 className="eventDetails-top-right-bottom-noteTitle">
                Note :
                <span className="eventDetails-top-right-bottom-notesDetail">
                  {" "}
                  Visit the official page of the event to get full details about
                  fee.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="eventDetails-bottom">
        <div className="eventDetails-bottom-collegeDetails">
          <FaMapMarkerAlt className="eventDetails-bottom-collegeDetails-locationIcon" />
          <h2 className="eventDetails-bottom-collegeDetails-collegeName">
            {collegeName}, {location}
          </h2>
          <CiShare1 className="eventDetails-bottom-collegeDetails-shareIcon" />
        </div>
        <div className="eventDetails-bottom-eventDetails">
          <p className="eventDetails-bottom-eventDetails-desc">
            <p>
              {showFullDescription ? descriptions : descriptions.slice(0, 300)}
              {descriptions.length > 300 && (
                <span
                  onClick={toggleDescription}
                  className="eventDetails-bottom-eventDetails-desc-more"
                >
                  {showFullDescription ? " ...less" : " more..."}
                </span>
              )}
            </p>
          </p>
        </div>
        <div className="eventDetails-bottom-contactDetails">
          <div className="eventDetails-bottom-contactDetails-left">
            <FaInstagramSquare className="eventDetails-bottom-contactDetails-left-instagramIcon" />
            <FaFacebook className="eventDetails-bottom-contactDetails-left-facebookIcon" />
            <FaLinkedin className="eventDetails-bottom-contactDetails-left-linkedinIcon" />
          </div>
          <div className="eventDetails-bottom-contactDetails-right">
            <div className="eventDetails-bottom-contactDetails-right-contactOrganiser">
              <p className="eventDetails-bottom-contactDetails-right-contactOrganiser-text">
                Contact Organizers
              </p>
            </div>
            <div className="eventDetails-bottom-contactDetails-right-register">
              <p className="eventDetails-bottom-contactDetails-right-register-text">
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
