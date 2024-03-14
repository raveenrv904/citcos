import React, { useContext } from "react";
import "./FilterPage.css";

import { AiFillCaretLeft } from "react-icons/ai";

import { FilterCard } from "../../Components";
import { HiLocationMarker } from "react-icons/hi";
import { RiFunctionLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

import { MyContext } from "../../MyContext";

import {
  EventFilterOne,
  EventFilterTwo,
  EventFilterThree,
  EventFilterFour,
} from "../../Components";

const FilterPage = () => {
  const {
    eventFilterData,
    setEventFilterData,
    filterClicked,
    setIsEventFilterHide,
  } = useContext(MyContext);

  const filterOption = [
    {
      icon: HiLocationMarker,
    },
    {
      icon: RiFunctionLine,
    },
    {
      icon: BsCurrencyDollar,
    },
    {
      icon: FaSort,
    },
  ];

  return (
    <div className="filterPage">
      <div className="filterPage__container">
        <div className="filterPage__container-top">
          <div className="filterPage__container-top-filter">
            <AiFillCaretLeft
              className="filterPage__container-top-filter-backIcon"
              onClick={() => {
                setIsEventFilterHide(false);
              }}
            />
            {filterOption?.map((filter, index) => {
              return (
                <FilterCard
                  icon={filter.icon}
                  title={eventFilterData[index][0]}
                  keyElement={index}
                  key={index}
                  color={true}
                />
              );
            })}
          </div>
          <div className="filterPage__container-top-search">
            {filterClicked === 0 && <EventFilterOne />}
            {filterClicked === 1 && <EventFilterTwo />}
            {filterClicked === 2 && <EventFilterThree />}
            {filterClicked === 3 && <EventFilterFour />}
          </div>
        </div>
        <div className="filterPage__container-bottom">
          <div className="filterPage__container-bottom-buttonContainer">
            <p className="filterPage__container-bottom-buttonText">Apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
