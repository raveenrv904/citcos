import React, { useContext, useState } from "react";

import "./FilterCard.css";

import { MyContext } from "../../MyContext";

const FilterCard = ({ icon, title, keyElement, color }) => {
  const IconComponent = icon;

  const {
    filterClicked,
    setFilterClicked,
    setIsEventFilterHide,
    isAcademic,
    isEvent,
    setAcademicFilterClicked,
    academicFilterClicked,
    setIsAcademicFilterHide,
  } = useContext(MyContext);

  const clicked = () => {
    if (isEvent) {
      setFilterClicked(keyElement);
      setIsEventFilterHide(true);
      setAcademicFilterClicked("");
    }
    if (isAcademic) {
      setAcademicFilterClicked(keyElement);
      setIsAcademicFilterHide(true);
      setFilterClicked("");
    }
  };

  return (
    <>
      <div
        className={`filterCard${
          (keyElement === filterClicked && color === true) ||
          (keyElement === academicFilterClicked && color === true)
            ? " filterCard_color"
            : ""
        }`}
        onClick={clicked}
      >
        <div className="filterCard__logo ">
          <IconComponent
            className={`filterCard__logoIcon${
              (keyElement === filterClicked && color === true) ||
              (keyElement === academicFilterClicked && color === true)
                ? " filterCard__logoIcon_color"
                : ""
            }`}
          />
        </div>
        <div
          className={`filterCard__title${
            (keyElement === filterClicked && color === true) ||
            (keyElement === academicFilterClicked && color === true)
              ? " filterCard__title_color"
              : ""
          }`}
        >
          {title}
        </div>
      </div>
    </>
  );
};

export default FilterCard;
