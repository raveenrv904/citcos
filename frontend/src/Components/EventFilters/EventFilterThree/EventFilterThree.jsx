import React from "react";
import "./EventFilterThree.css";

const EventFilterThree = () => {
  const eventsFilter = ["Paid entry ", "Free entry", "All events "];

  return (
    <div className="eventFilterThree">
      {eventsFilter?.map((filterName, index) => {
        return (
          <label className="eventFilterThree__container" htmlFor={index}>
            <input
              type="radio"
              id={index}
              name="{index}"
              className="eventFilterThree__container-checkbox"
            />
            <span className="eventFilterThree__container-text">
              {filterName}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default EventFilterThree;
