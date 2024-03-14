import React, { useContext, useState } from "react";
import "./EventCreationPage.css";

import { BiSolidLeftArrow, BiUpArrowAlt } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { IoGitNetworkOutline } from "react-icons/io5";
import { PiUpload } from "react-icons/pi";

import { Document, Page } from "react-pdf";

import { MyContext } from "../../MyContext";

const EventCreationPage = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const { setIsAcademicSearchHide } = useContext(MyContext);

  const universities = [
    "Anna university (CEG , MIT, ACT, SA... )",
    "Affiliated to anna university - Non automonous( SSN, PSG, RIT, CITAR...)",
    "Affiliated to anna university - autonomous ( Search your college )",
    "Deemed university ( SRM, VIT, Saveetha...) ",
  ];

  const regulations = ["2021-2125", "2017-2021", "2012-2017"];

  const departments = [
    "Computer science engineering",
    "Mechanical engineering ",
    "Civil engineering",
    "Electricals and electronics engineering",
    "Chemical engineering ",
  ];

  const offAcademicSearch = () => {
    setIsAcademicSearchHide(false);
  };

  return (
    <div className="eventCreationPage">
      <div className="eventCreationPage__left">
        <div className="eventCreationPage__left-top">
          <BiSolidLeftArrow
            className="eventCreationPage__left-top-backIcon"
            onClick={offAcademicSearch}
          />
          <h2 className="eventCreationPage__left-top-text">
            Please fill the details :
          </h2>
        </div>
        <div className="eventCreationPage__left-bottom">
          <div className="eventCreationPage__left-bottom-university">
            <div className="eventCreationPage__left-bottom-university-inputBox">
              <input
                type="text"
                className="eventCreationPage__left-bottom-university-inputBox-cover"
                placeholder="Search your university "
              />
              <FaGraduationCap className="eventCreationPage__left-bottom-university-inputBox-Icon" />
            </div>
            <div className="eventCreationPage__left-bottom-university-textContainer">
              {universities?.map((university) => {
                return (
                  <div className="eventCreationPage__left-bottom-university-textContainer-cover">
                    <BiUpArrowAlt className="eventCreationPage__left-bottom-university-textContainer-cover-Icon" />
                    <h2 className="eventCreationPage__left-bottom-university-textContainer-cover-text">
                      {university}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="eventCreationPage__left-bottom-regulation">
            <div className="eventCreationPage__left-bottom-university-inputBox">
              <input
                type="text"
                className="eventCreationPage__left-bottom-university-inputBox-cover"
                placeholder="Enter your regulation"
              />

              <AiFillBook className="eventCreationPage__left-bottom-university-inputBox-Icon" />
            </div>
            <div className="eventCreationPage__left-bottom-university-textContainer">
              {regulations?.map((regulation) => {
                return (
                  <div className="eventCreationPage__left-bottom-university-textContainer-cover">
                    <BiUpArrowAlt className="eventCreationPage__left-bottom-university-textContainer-cover-Icon" />
                    <h2 className="eventCreationPage__left-bottom-university-textContainer-cover-text">
                      {regulation}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="eventCreationPage__left-bottom-department">
            <div className="eventCreationPage__left-bottom-university-inputBox">
              <input
                type="text"
                className="eventCreationPage__left-bottom-university-inputBox-cover"
                placeholder="Enter your department"
              />
              <IoGitNetworkOutline className="eventCreationPage__left-bottom-university-inputBox-Icon" />
            </div>
            <div className="eventCreationPage__left-bottom-university-textContainer">
              {departments?.map((department) => {
                return (
                  <div className="eventCreationPage__left-bottom-university-textContainer-cover">
                    <BiUpArrowAlt className="eventCreationPage__left-bottom-university-textContainer-cover-Icon" />
                    <h2 className="eventCreationPage__left-bottom-university-textContainer-cover-text">
                      {department}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="eventCreationPage__right">
        <div className="eventCreationPage__right-top">
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
                  Upload the Notes (PDF)
                </p>
              </>
            )}
          </form>

          <div className="eventCreationPage__right-top-note">
            <h2 className="eventCreationPage__right-top-note-redText">
              Note:{" "}
              <span className="eventCreationPage__right-top-note-other">
                The PDF should be less than 3 Mb
              </span>
            </h2>
          </div>
        </div>
        <div className="eventCreationPage__right-middle">
          <div className="eventCreationPage__right-middle-top">
            <fieldset className="eventCreationPage__right-middle-top-outer">
              <legend className="eventCreationPage__right-middle-top-outer-title">
                Subject Name
              </legend>
              <input
                type="text"
                placeholder="Enter the subject name  (eg DBMS )"
                className="eventCreationPage__right-middle-top-outer-input"
              />
            </fieldset>
          </div>
          <div className="eventCreationPage__right-middle-bottom">
            <fieldset className="eventCreationPage__right-middle-bottom-outer">
              <legend className="eventCreationPage__right-middle-bottom-outer-title">
                Subject Name
              </legend>
              <input
                type="text"
                placeholder="Enter the subject name  (eg DBMS )"
                className="eventCreationPage__right-middle-bottom-outer-input"
              />
            </fieldset>
          </div>
        </div>
        <div className="eventCreationPage__right-bottom">
          <div className="eventCreationPage__right-bottom-button">
            <h2 className="eventCreationPage__right-bottom-button-text">
              Post
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreationPage;
