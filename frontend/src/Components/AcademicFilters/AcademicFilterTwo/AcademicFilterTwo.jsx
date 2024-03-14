import React from "react";
import "./AcademicFilterTwo.css";

import { BiSolidBookBookmark, BiUpArrowAlt } from "react-icons/bi";

const AcademicFilterTwo = () => {
  const regulations = ["2021-2125", "2017-2021", "2012-2017"];

  return (
    <div className="academicFilterTwo">
      <div className="academicFilterTwo-top">
        <div className="academicFilterTwo-top-container">
          <input
            type="text"
            placeholder="Enter your regulation"
            className="academicFilterTwo-top-container--input"
          />
          <BiSolidBookBookmark className="academicFilterTwo-top-container-Icon" />
        </div>
      </div>
      <div className="academicFilterTwo-bottom">
        <div className="academicFilterTwo-bottom__container">
          {regulations?.map((regulation) => {
            return (
              <div className="academicFilterTwo-bottom__container-cover">
                <BiUpArrowAlt className="academicFilterTwo__bottom-container-cover-Uparrow" />
                <h2 className="academicFilterTwo__bottom-container--cover-text">
                  {regulation}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicFilterTwo;
