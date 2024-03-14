import React, { useState } from "react";
import "./Notes.css";

import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDotsVerticalRounded, BiSolidFilePdf } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";

const Notes = ({
  affliation,
  college,
  department,
  subject,
  sub_code,
  year,
  pTitle,
  size,
}) => {
  const [isBookMarked, setIsBookMarked] = useState(false);

  const toggleBookMarked = () => {
    setIsBookMarked(!isBookMarked);
  };

  return (
    <div className="notes">
      <div className="notes__top">
        <div className="notes__top-left">
          <h2 className="notes__top-left-affliation">{affliation}</h2>
          <p className="notes__top-left-college">. {college}</p>
        </div>
        <div className="notes__top-right">
          {!isBookMarked ? (
            <BsBookmark
              className="notes__top-right-bookmarkIcon"
              onClick={toggleBookMarked}
            />
          ) : (
            <BsFillBookmarkCheckFill
              className="notes__top-right-bookmarkIcon"
              onClick={toggleBookMarked}
            />
          )}

          <BiDotsVerticalRounded className="notes__top-right-optionIcon" />
        </div>
      </div>
      <div className="notes__bottom">
        <div className="notes__bottom-left">
          <p className="notes__bottom-left-department">
            Department: {department}
          </p>
          <p className="notes__bottom-left-subject">Subject: {subject}</p>
          <p className="notes__bottom-left-sub_code">
            Subject Code: {sub_code}
          </p>
        </div>
        <div className="notes__bottom-right">
          <div className="notes__bottom-right-downloadBox">
            <div className="notes__bottom-right-downloadBox-left">
              <BiSolidFilePdf className="notes__bottom-right-downloadBox-left-pdfIcon" />
              <div className="notes__bottom-right-downloadBox-left-details">
                <h2 className="notes__bottom-right-downloadBox-left-details-title">
                  {pTitle}
                </h2>
                <p className="notes__bottom-right-downloadBox-left-details-size">
                  {size}
                </p>
              </div>
            </div>
            <div className="notes__bottom-right-downloadBox-right">
              <FiDownload className="notes__bottom-right-downloadBox-right-downloadIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
