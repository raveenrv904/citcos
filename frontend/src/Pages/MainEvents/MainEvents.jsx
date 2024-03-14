import React, { useContext } from "react";

import "./MainEvents.css";

import { FilterCard, EventPageCard, Chats } from "../../Components";

import { FaSort } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiFunctionLine, RiAddBoxLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { FilterPage, CollegeEventCreationPage } from "../../container";

import { MyContext } from "../../MyContext";

const MainEvents = () => {
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

  const {
    eventFilterData,
    isEventFilterHide,
    setIsEventFilterHide,
    isEventCreationHide,
    setIsEventCreationHide,
  } = useContext(MyContext);

  const toggleEventCreation = () => {
    setIsEventCreationHide(!isEventCreationHide);
  };

  return (
    <>
      <div className="mainEvents">
        <div className="mainEvents__left">
          <div className="mainEvents__left-top">
            {filterOption?.map((filter, index) => {
              return (
                <FilterCard
                  icon={filter.icon}
                  title={eventFilterData[index][0]}
                  keyElement={index}
                  key={index}
                  color={false}
                />
              );
            })}
          </div>
          <div className="mainEvents__left-bottom">
            <EventPageCard />
          </div>
        </div>
        <div className="mainEvents__right">
          <div className="mainEvents__right-bottom">
            <div
              className="mainEvents__right-bottom-button"
              onClick={toggleEventCreation}
            >
              <button className="mainEvents__right-bottom-postEvent">
                <RiAddBoxLine className="mainEvents__right-bottom-postEvent-Icon" />
                <h1 className="mainEvents__right-bottom-postEvent-title">
                  Post an event
                </h1>
              </button>
            </div>

            <div className="mainEvents__right-bottom-chat">
              <Chats />
            </div>
          </div>
        </div>
      </div>
      {isEventFilterHide && (
        <div className="div">
          <div
            className="showWindow__background2"
            onClick={() => {
              setIsEventFilterHide(false);
            }}
          ></div>
          <div className="shareWindow">
            <FilterPage />
          </div>
        </div>
      )}

      {isEventCreationHide && (
        <div className="div">
          <div
            className="showWindow__background2"
            onClick={toggleEventCreation}
          ></div>
          <div className="shareWindow">
            <CollegeEventCreationPage />
          </div>
        </div>
      )}
    </>
  );
};

export default MainEvents;
