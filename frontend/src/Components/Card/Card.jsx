import React, { useContext, useEffect, useState } from "react";
import "./Card.css";

import { Location, CalIcon } from "../../assets";

import { EventDetails } from "../../container";
import { MyContext } from "../../MyContext";

const Card = ({ image, title1, title2, date, location, detail }) => {
  const myStyle = {
    width: "386px",
    height: "233px",
    flexShrink: 0,
    borderRadius: "16px",
    boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(360deg, #000 0%, rgba(0, 0, 0, 0) 100%),
                      linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%),
                      url("${image}")`,
    // backgroundAttachment: "fixed",
    backgroundSize: "auto",
  };

  const {
    isEventPageOpen,
    setIsEventPageOpen,
    eventDetails,
    setEventDetails,
    events,
    setEvents,
  } = useContext(MyContext);

  const toggleEventsDetails = () => {
    setIsEventPageOpen(!isEventPageOpen);
    setEventDetails([detail]);
  };

  return (
    <>
      <div className="card" onClick={toggleEventsDetails}>
        <div className="coverImage">
          <div className="card__container" style={myStyle}>
            <div className="card__container--main">
              <div className="card__container-top">
                <h1 className="card__container-top--title">{title1}</h1>
              </div>
              <div className="card__container-bottom">
                <div className="card__container-bottom--left">
                  <img
                    src={Location}
                    alt="Map Icon"
                    className="card__container-bottom--left-locationIcon"
                  />
                  <h2 className="card__container-bottom--left-location">
                    {location}
                  </h2>
                </div>
                {/* <div className="card__container-bottom--right">
                  <img
                    src={CalIcon}
                    alt="Calender Icon"
                    className="card__container-bottom--left-dateIcon"
                  />
                  <h2 className="card__container-bottom--left-date">{date}</h2>
                </div> */}
              </div>
            </div>
            <div className="card__container-bottom--right">
              <img
                src={CalIcon}
                alt="Calender Icon"
                className="card__container-bottom--left-dateIcon"
              />
              <h2 className="card__container-bottom--left-date">{date}</h2>
            </div>
          </div>
        </div>
      </div>

      {isEventPageOpen && (
        <div className="cardDetails div">
          <div
            className="showWindow__backgound2"
            onClick={toggleEventsDetails}
          ></div>
          <div className="shareWindow ">
            <EventDetails
              eventName={eventDetails[0].eventName}
              eventDates={eventDetails[0].eventDate}
              feesDetails={eventDetails[0].fees}
              collegeName={eventDetails[0].organisationName}
              location={eventDetails[0].location}
              description={eventDetails[0].aboutTheEvent}
              image={eventDetails[0].image}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
