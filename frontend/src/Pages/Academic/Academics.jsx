import React, { useContext } from "react";

import "./Academics.css";

import { FaGraduationCap } from "react-icons/fa";
import { BiSolidBookBookmark } from "react-icons/bi";
import { RiAddBoxLine } from "react-icons/ri";
import { IoGitNetworkOutline } from "react-icons/io5";

import { FilterCard, Chats, Notes } from "../../Components";
import { AcademicFilterPage, EventCreationPage } from "../../container";

import { MyContext } from "../../MyContext";

const Academics = () => {
  const {
    academicFilterData,
    setAcademicFilterData,
    isAcademicFilterHide,
    setIsAcademicFilterHide,
    isAcademicSearchHide,
    setIsAcademicSearchHide,
  } = useContext(MyContext);
  const filterOption = [
    {
      icon: FaGraduationCap,
    },
    {
      icon: BiSolidBookBookmark,
    },
    {
      icon: IoGitNetworkOutline,
    },
  ];

  const toggleAcademicSearch = () => {
    setIsAcademicSearchHide(!isAcademicSearchHide);
  };

  const notesDetails = [
    {
      affliation: "Affiliated to Anna university",
      college: "Chennai institute of technology",
      department: "Computer science engineering",
      year: "3rd Year",
      subject: "Design and analysis of algorithm",
      subject_code: "CW3423",
      pTitle: "DAA Unit 1",
      size: "2.3 mb",
    },

    {
      affliation: "Affiliated to Anna university",
      college: "Chennai institute of technology",
      department: "Computer science engineering",
      year: "3rd Year",
      subject: "Design and analysis of algorithm",
      subject_code: "CW3423",
      pTitle: "DAA Unit 1",
      size: "2.3 mb",
    },

    {
      affliation: "Affiliated to Anna university",
      college: "Chennai institute of technology",
      department: "Computer science engineering",
      year: "3rd Year",
      subject: "Design and analysis of algorithm",
      subject_code: "CW3423",
      pTitle: "DAA Unit 1",
      size: "2.3 mb",
    },

    {
      affliation: "Affiliated to Anna university",
      college: "Chennai institute of technology",
      department: "Computer science engineering",
      year: "3rd Year",
      subject: "Design and analysis of algorithm",
      subject_code: "CW3423",
      pTitle: "DAA Unit 1",
      size: "2.3 mb",
    },

    {
      affliation: "Affiliated to Anna university",
      college: "Chennai institute of technology",
      department: "Computer science engineering",
      year: "3rd Year",
      subject: "Design and analysis of algorithm",
      subject_code: "CW3423",
      pTitle: "DAA Unit 1",
      size: "2.3 mb",
    },
  ];
  return (
    <>
      <div className="academics">
        <div className="academics__left">
          <div className="academics__left-top">
            {filterOption.map((filterCard, index) => {
              return (
                <FilterCard
                  icon={filterCard.icon}
                  title={academicFilterData[index][0]}
                  key={index}
                  keyElement={index}
                />
              );
            })}
          </div>
          <div className="academics__left-bottom">
            {notesDetails?.map((notes, index) => {
              return (
                <Notes
                  affliation={notes.affliation}
                  college={notes.college}
                  department={notes.department}
                  year={notes.year}
                  subject={notes.subject}
                  sub_code={notes.subject_code}
                  pTitle={notes.pTitle}
                  size={notes.size}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="academics__right">
          <div className="academics__right-bottom">
            <div
              className="academics__right-bottom-button"
              onClick={toggleAcademicSearch}
            >
              <button className="academics__right-bottom-postEvent">
                <RiAddBoxLine className="academics__right-bottom-postEvent-Icon" />
                <h1 className="academics__right-bottom-postEvent-title">
                  Post My Notes
                </h1>
              </button>
            </div>

            <div className="academics__right-bottom-chat">
              <Chats />
            </div>
          </div>
        </div>
      </div>
      {isAcademicFilterHide && (
        <div className="div">
          <div
            className="showWindow__background2"
            onClick={() => {
              setIsAcademicFilterHide(false);
            }}
          ></div>
          <div className="shareWindow">
            <AcademicFilterPage />
          </div>
        </div>
      )}

      {isAcademicSearchHide && (
        <div className="div ">
          <div
            className="showWindow__background2"
            onClick={toggleAcademicSearch}
          ></div>
          <div className="shareWindow">
            <EventCreationPage />
          </div>
        </div>
      )}
    </>
  );
};

export default Academics;
