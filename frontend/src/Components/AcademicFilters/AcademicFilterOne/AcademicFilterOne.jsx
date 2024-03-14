import React from "react";
import "./AcademicFilterOne.css";

import { FaGraduationCap } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";

const AcademicFilterOne = () => {
  const colleges = [
    "Anna university (CEG , MIT, ACT, SA... )",
    "Affiliated to anna university - Non automonous( SSN, PSG, RIT, CITAR...)",
    "Affiliated to anna university - autonomous ( Search your college )",
    "Deemed university ( SRM, VIT, Saveetha...) ",
  ];

  return (
    <div className="academicFilterOne">
      <div className="academicFilterOne__top">
        <div className="academicFilterOne__top-left">
          <input
            type="text"
            className="academicFilterOne__top-left-input"
            placeholder="Search your university "
          />
          <FaGraduationCap className="academicFilterOne__top-left-graduatinIcon" />
        </div>
        <div className="academicFilterOne__top-right">
          <div className="academicFilterOne__top-right-button">
            <h2 className="academicFilterOne__top-right-buttonText">Search</h2>
          </div>
        </div>
      </div>
      <div className="academicFilterOne__bottom">
        <div className="academicFilterOne__bottom-container">
          {colleges?.map((college, index) => {
            return (
              <div
                className="academicFilterOne__bottom-container-section"
                key={index}
              >
                <BiUpArrowAlt className="academicFilterOne__bottom-container-Uparrow" />
                <h2 className="academicFilterOne__bottom-container-text">
                  {college}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicFilterOne;
