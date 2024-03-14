import React, { useContext, useState, useEffect } from "react";
import "./CollegeEventCreationPage.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { AiOutlineLeft } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { PiUpload } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { RiAddBoxLine } from "react-icons/ri";

import { MyContext } from "../../MyContext";
import axios from "axios";

const CollegeEventCreationPage = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [eventDetails, setEventDetails] = useState({
    userId: "",
    eventName: "",
    location: "",
    duration: "",
    eventDate: "",
    aboutTheEvent: "",
    image:
      "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    organisationName: "",
    entryFees: "yes",
    fees: [0],
    category: "",
  });

  const { setIsEventCreationHide, loggedUser } = useContext(MyContext);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const offEventCreationPage = () => {
    setIsEventCreationHide(false);
  };

  const submitEventForm = () => {
    eventDetails.userId = loggedUser._id;
    axios
      .post("http://localhost:8000/api/v1/events/createEvent", eventDetails)
      .then((response) => {
        console.log(response.data);
        setIsEventCreationHide(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="collegeEventCreationPage">
      <div className="collegeEventCreationPage-top">
        <div className="collegeEventCreationPage-top-left">
          <div className="collegeEventCreationPage-top-left-smallContainer">
            <BiSolidLeftArrow
              className="collegeEventCreationPage-top-left-backIcon"
              onClick={offEventCreationPage}
            />
            <h2 className="collegeEventCreationPage-top-left-text">
              Fill the event’s details :
            </h2>
          </div>
          <div className="collegeEventCreationPage-top-left-middleContainer">
            <div className="eventCreationPage__right-middle-top">
              <fieldset className="eventCreationPage__right-middle-top-outer">
                <legend className="eventCreationPage__right-middle-top-outer-title">
                  Event name
                </legend>
                <input
                  type="text"
                  placeholder="Enter the event name here"
                  className="eventCreationPage__right-middle-top-outer-input"
                  onChange={(event) => {
                    eventDetails.eventName = event.target.value;
                  }}
                />
              </fieldset>
            </div>
            <div className="eventCreationPage__right-middle-bottom">
              <fieldset className="eventCreationPage__right-middle-bottom-outer">
                <legend className="eventCreationPage__right-middle-bottom-outer-title">
                  Location
                </legend>
                <input
                  type="text"
                  placeholder="Enter the event location"
                  className="eventCreationPage__right-middle-bottom-outer-input"
                  onChange={(event) => {
                    eventDetails.location = event.target.value;
                  }}
                />
              </fieldset>
            </div>
          </div>
          <div className="collegeEventCreationPage-top-left-bottomContainer">
            <div className="collegeEventCreationPage-top-left-bottomContainer-duration">
              <h2 className="collegeEventCreationPage-top-left-bottomContainer-duration-title">
                Duration :
              </h2>
              <div className="collegeEventCreationPage-top-left-bottomContainer-cover">
                <input
                  type="number"
                  className="collegeEventCreationPage-top-left-bottomContainer-duration-input"
                  onChange={(event) => {
                    eventDetails.duration = event.target.value;
                  }}
                />
                <span className="collegeEventCreationPage-top-left-bottomContainer-duration-icon">
                  <AiOutlineLeft className="collegeEventCreationPage-top-left-bottomContainer-duration-iconUpward" />
                  <AiOutlineLeft className="collegeEventCreationPage-top-left-bottomContainer-duration-iconDownward" />
                </span>
                <span className="collegeEventCreationPage-top-left-bottomContainer-duration-text">
                  Days
                </span>
              </div>
            </div>
            <div className="collegeEventCreationPage-top-left-bottomContainer-date">
              <h2 className="collegeEventCreationPage-top-left-bottomContainer-date-title">
                Pick the dates :
              </h2>
              <input
                type="date"
                className="collegeEventCreationPage-top-left-bottomContainer-date-dateInput"
                onChange={(event) => {
                  eventDetails.eventDate = event.target.value;
                }}
              />
            </div>
          </div>
        </div>
        <div className="collegeEventCreationPage-top-right">
          <form
            onClick={() => document.querySelector(".input-field").click()}
            className="eventCreationPage__right-top-image-container"
          >
            <input
              type="file"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setImage(URL.createObjectURL(files[0]));
                }
              }}
            />

            {image ? (
              // <img src={image} width={150} height={150} alt={fileName} />
              <div>
                <Document file={image} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            ) : (
              <>
                <PiUpload className="eventCreationPage__right-top-image-container-icon" />
                <p className="eventCreationPage__right-top-image-container-Text">
                  Upload the poster
                </p>
              </>
            )}
          </form>
          <div className="eventCreationPage__right-top-note">
            <h2 className="eventCreationPage__right-top-note-redText">
              Note:{" "}
              <span className="eventCreationPage__right-top-note-other">
                The image should be less than 3 Mb
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="collegeEventCreationPage-middle">
        <div className="collegeEventCreationPage-middle-container">
          <label
            htmlFor="textArea"
            className="collegeEventCreationPage-middle-container-title"
          >
            Write about your event in 400 words :
          </label>
          <textarea
            name=""
            placeholder="Type here..."
            id="textArea"
            className="collegeEventCreationPage-middle-container-input"
            onChange={(event) => {
              eventDetails.aboutTheEvent = event.target.value;
            }}
          ></textarea>
        </div>
      </div>
      <div className="collegeEventCreationPage-bottom">
        <div className="collegeEventCreationPage-bottom-top">
          <div className="collegeEventCreationPage-bottom-top-organisation">
            <div className="eventCreationPage__right-middle-top">
              <fieldset className="eventCreationPage__right-middle-top-outer">
                <legend className="eventCreationPage__right-middle-top-outer-title">
                  Organization name
                </legend>
                <input
                  type="text"
                  placeholder="Enter your organization/college"
                  className="eventCreationPage__right-middle-top-outer-input"
                  onChange={(event) => {
                    eventDetails.organisationName = event.target.value;
                  }}
                />
              </fieldset>
            </div>
          </div>
          <div className="collegeEventCreationPage-bottom-top-eventLinks">
            <h2 className="collegeEventCreationPage-bottom-top-eventLinks-title">
              Event Pages :
            </h2>
            <CgWebsite className="collegeEventCreationPage-bottom-top-eventLinks-website" />
            <BsLinkedin className="collegeEventCreationPage-bottom-top-eventLinks-linkedin" />
            <svg
              className="collegeEventCreationPage-bottom-top-eventLinks-instagram"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_390_835)">
                <path
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="url(#paint0_radial_390_835)"
                />
                <path
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="url(#paint1_radial_390_835)"
                />
                <path
                  d="M20.0014 4.375C15.758 4.375 15.2253 4.39359 13.5588 4.46938C11.8953 4.54563 10.7598 4.80891 9.76641 5.19531C8.73859 5.59438 7.86688 6.12828 6.99844 6.99703C6.12922 7.86562 5.59531 8.73734 5.195 9.76469C4.8075 10.7584 4.54391 11.8944 4.46906 13.557C4.39453 15.2238 4.375 15.7566 4.375 20.0002C4.375 24.2438 4.39375 24.7747 4.46938 26.4412C4.54594 28.1047 4.80922 29.2402 5.19531 30.2336C5.59469 31.2614 6.12859 32.1331 6.99734 33.0016C7.86563 33.8708 8.73734 34.4059 9.76438 34.805C10.7586 35.1914 11.8942 35.4547 13.5573 35.5309C15.2241 35.6067 15.7563 35.6253 19.9995 35.6253C24.2434 35.6253 24.7744 35.6067 26.4409 35.5309C28.1044 35.4547 29.2411 35.1914 30.2353 34.805C31.2627 34.4059 32.1331 33.8708 33.0012 33.0016C33.8705 32.1331 34.4042 31.2614 34.8047 30.2341C35.1887 29.2402 35.4525 28.1044 35.5306 26.4416C35.6055 24.775 35.625 24.2438 35.625 20.0002C35.625 15.7566 35.6055 15.2241 35.5306 13.5573C35.4525 11.8939 35.1887 10.7586 34.8047 9.76516C34.4042 8.73734 33.8705 7.86562 33.0012 6.99703C32.1322 6.12797 31.263 5.59406 30.2344 5.19547C29.2383 4.80891 28.1022 4.54547 26.4387 4.46938C24.772 4.39359 24.2414 4.375 19.9966 4.375H20.0014ZM18.5997 7.19078C19.0158 7.19016 19.48 7.19078 20.0014 7.19078C24.1734 7.19078 24.6678 7.20578 26.3153 7.28063C27.8387 7.35031 28.6656 7.60484 29.2164 7.81875C29.9456 8.10188 30.4655 8.44047 31.012 8.9875C31.5589 9.53438 31.8973 10.0552 32.1813 10.7844C32.3952 11.3344 32.65 12.1613 32.7194 13.6847C32.7942 15.3319 32.8105 15.8266 32.8105 19.9966C32.8105 24.1666 32.7942 24.6614 32.7194 26.3084C32.6497 27.8319 32.3952 28.6587 32.1813 29.2089C31.8981 29.9381 31.5589 30.4573 31.012 31.0039C30.4652 31.5508 29.9459 31.8892 29.2164 32.1725C28.6663 32.3873 27.8387 32.6413 26.3153 32.7109C24.6681 32.7858 24.1734 32.802 20.0014 32.802C15.8292 32.802 15.3347 32.7858 13.6877 32.7109C12.1642 32.6406 11.3373 32.3861 10.7861 32.1722C10.057 31.8889 9.53609 31.5505 8.98922 31.0036C8.44234 30.4567 8.10391 29.9372 7.82 29.2077C7.60609 28.6575 7.35125 27.8306 7.28188 26.3072C7.20703 24.66 7.19203 24.1653 7.19203 19.9927C7.19203 15.8202 7.20703 15.328 7.28188 13.6808C7.35156 12.1573 7.60609 11.3305 7.82 10.7797C8.10328 10.0505 8.44234 9.52969 8.98938 8.98281C9.53625 8.43594 10.057 8.09734 10.7862 7.81359C11.337 7.59875 12.1642 7.34484 13.6877 7.27484C15.1291 7.20969 15.6877 7.19016 18.5997 7.18687V7.19078ZM28.342 9.78516C27.3069 9.78516 26.467 10.6242 26.467 11.6595C26.467 12.6947 27.3069 13.5345 28.342 13.5345C29.3772 13.5345 30.217 12.6947 30.217 11.6595C30.217 10.6244 29.3772 9.78453 28.342 9.78453V9.78516ZM20.0014 11.9759C15.5702 11.9759 11.9773 15.5688 11.9773 20.0002C11.9773 24.4316 15.5702 28.0227 20.0014 28.0227C24.4328 28.0227 28.0244 24.4316 28.0244 20.0002C28.0244 15.5689 24.4325 11.9759 20.0011 11.9759H20.0014ZM20.0014 14.7917C22.8778 14.7917 25.2098 17.1234 25.2098 20.0002C25.2098 22.8766 22.8778 25.2086 20.0014 25.2086C17.1248 25.2086 14.7931 22.8766 14.7931 20.0002C14.7931 17.1234 17.1248 14.7917 20.0014 14.7917Z"
                  fill="white"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_390_835"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10.625 43.0808) rotate(-90) scale(39.643 36.8711)"
                >
                  <stop stop-color="#FFDD55" />
                  <stop offset="0.1" stop-color="#FFDD55" />
                  <stop offset="0.5" stop-color="#FF543E" />
                  <stop offset="1" stop-color="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_390_835"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-6.70016 2.88141) rotate(78.681) scale(17.7206 73.045)"
                >
                  <stop stop-color="#3771C8" />
                  <stop offset="0.128" stop-color="#3771C8" />
                  <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                </radialGradient>
                <clipPath id="clip0_390_835">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <BsFacebook className="collegeEventCreationPage-bottom-top-eventLinks-facebook" />
          </div>
        </div>
        <div className="collegeEventCreationPage-bottom-bottom">
          <div className="collegeEventCreationPage-bottom-bottom-left">
            <div className="collegeEventCreationPage-bottom-bottom-left-entryDetails">
              <label
                htmlFor="yesorno"
                className="collegeEventCreationPage-bottom-bottom-left-entryDetails-title"
              >
                Entry fee :
              </label>
              <select
                name="yesorno"
                id="yesorno"
                className="collegeEventCreationPage-bottom-bottom-left-entryDetails-dropdown"
                onChange={(event) => {
                  eventDetails.entryFees = event.target.value;
                }}
              >
                <option
                  value="yes"
                  defaultChecked
                  className="collegeEventCreationPage-bottom-bottom-left-entryDetails-dropdown-option"
                >
                  Yes
                </option>
                <option
                  className="collegeEventCreationPage-bottom-bottom-left-entryDetails-dropdown-option"
                  value="no"
                >
                  No
                </option>
              </select>
            </div>
            <div className="collegeEventCreationPage-bottom-bottom-left-other">
              <div className="collegeEventCreationPage-bottom-bottom-left-other-fee">
                <label
                  htmlFor="fee"
                  className="collegeEventCreationPage-bottom-bottom-left-other-fee-title"
                >
                  Fee:{" "}
                </label>
                <input
                  id="fee"
                  type="text"
                  placeholder="eg :₹100"
                  className="collegeEventCreationPage-bottom-bottom-left-other-fee-input"
                  onChange={(event) => {
                    eventDetails.fees[0] = event.target.value;
                  }}
                />
              </div>
              <div className="collegeEventCreationPage-bottom-bottom-left-other-section">
                <div className="collegeEventCreationPage-bottom-bottom-left-other-category">
                  <label
                    htmlFor="category"
                    className="collegeEventCreationPage-bottom-bottom-left-other-category-title"
                  >
                    Category:{" "}
                  </label>
                  <input
                    id="category"
                    type="text"
                    placeholder="eg :Workshop"
                    className="collegeEventCreationPage-bottom-bottom-left-other-category-input"
                    onChange={(event) => {
                      eventDetails.category = event.target.value;
                    }}
                  />
                </div>
                <div className="collegeEventCreationPage-bottom-bottom-left-other-addOther">
                  <RiAddBoxLine className="collegeEventCreationPage-bottom-bottom-left-other-addOther-AddIcon" />
                  <h2 className="collegeEventCreationPage-bottom-bottom-left-other-addOther-desc">
                    Add another fee category
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeEventCreationPage-bottom-bottom-right">
            <div
              className="collegeEventCreationPage-bottom-bottom-right-button"
              onClick={submitEventForm}
            >
              <h2 className="collegeEventCreationPage-bottom-bottom-right-button-text">
                Post Event
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeEventCreationPage;
