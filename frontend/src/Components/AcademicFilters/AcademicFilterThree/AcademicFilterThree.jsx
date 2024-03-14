import React from "react";
import "./AcademicFilterThree.css";

import { IoGitNetworkOutline } from "react-icons/io5";
import { BiUpArrowAlt } from "react-icons/bi";

const AcademicFilterThree = () => {
  const departments = [
    "Computer science engineering",
    "Mechanical engineering ",
    "Civil engineering",
    "Electricals and electronics engineering",
    "Chemical engineering ",
  ];

  return (
    <div className="academicFilterThree">
      <div className="academicFilterThree__container">
        <div className="academicFilterThree__container--top">
          <div className="academicFilterThree__container--top-left">
            <input
              type="text"
              className="academicFilterThree__container--top-left-input"
              placeholder="Enter your department"
            />
            <IoGitNetworkOutline className="academicFilterThree__container--top-left-Icon" />
          </div>
        </div>
        <div className="academicFilterThree__container--bottom">
          {departments?.map((department) => {
            return (
              <div className="academicFilterTwo__container--bottom-cover">
                <BiUpArrowAlt className="academicFilterThree__container-bottom-cover-Uparrow" />
                <h2 className="academicFilterThree__container-bottom--cover-text">
                  {department}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicFilterThree;
