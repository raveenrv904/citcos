import React from "react";
import "./EventFilterOne.css";

import { FaLocationDot } from "react-icons/fa6";

const EventFilterOne = () => {
  return (
    <div className="eventFilterOne">
      <div className="eventFilterOne-left">
        <input
          type="text"
          placeholder="Enter Your Location"
          className="eventFilterOne-left-inputBox"
        />
        <FaLocationDot className="eventFilterOne-left-locationIcon" />
      </div>
      <div className="eventFilterOne-right">
        <div className="eventFilter-right-searchButton">
          <p className="eventFilter-right-searchButton-text">Search</p>
        </div>
      </div>
    </div>
  );
};

export default EventFilterOne;
