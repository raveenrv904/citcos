import React, { useContext } from "react";
import "./AcademicFilterPage.css";

import { MyContext } from "../../MyContext";
import { AiFillCaretLeft } from "react-icons/ai";
import { FilterCard } from "../../Components";
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidBookBookmark } from "react-icons/bi";
import { IoGitNetworkOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";

import {
  AcademicFilterOne,
  AcademicFilterTwo,
  AcademicFilterThree,
} from "../../Components";

const AcademicFilterPage = () => {
  const {
    academicFilterData,
    // setAcademicFilterData,
    academicFilterClicked,
    setAcademicFilterClicked,
    setIsAcademicFilterHide,
  } = useContext(MyContext);

  const filterForOption = [
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

  const nextFilterPage = () => {
    if (academicFilterClicked < 2) {
      setAcademicFilterClicked(academicFilterClicked + 1);
    }
  };

  return (
    <div className="academicFilterPage">
      <div className="academicFilterPage__container">
        <div className="academicFilterPage__top">
          <div className="academicFilterPage-top-filter">
            <AiFillCaretLeft
              className="academicFilterPage-top-filter-backIcon"
              onClick={() => {
                setIsAcademicFilterHide(false);
              }}
            />
            {filterForOption?.map((filter, index) => {
              return (
                <FilterCard
                  icon={filter.icon}
                  title={academicFilterData[index][0]}
                  keyElement={index}
                  key={index}
                  color={true}
                />
              );
            })}
          </div>
        </div>
        <div className="academicFilterPage__middle">
          <div className="academicFilterPage__middle-container">
            {academicFilterClicked === 0 && <AcademicFilterOne />}
            {academicFilterClicked === 1 && <AcademicFilterTwo />}
            {academicFilterClicked === 2 && <AcademicFilterThree />}
          </div>
        </div>
        <div className="academicFilterPage__bottom">
          <div
            className="academicFilterPage__bottom-container"
            onClick={nextFilterPage}
          >
            {academicFilterClicked === 2 ? (
              <h2 className="academicFilterPage__bottom-container-text ">
                Apply
              </h2>
            ) : (
              <h2 className="academicFilterPage__bottom-container-text">
                Next
                <AiOutlineRight />
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFilterPage;
