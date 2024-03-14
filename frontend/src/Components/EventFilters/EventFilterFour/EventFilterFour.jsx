import React from "react";
import "./EventFilterFour.css";

const EventFilterFour = () => {
  const eventsFilter = ["Upcoming events ", "Time of post"];
  return (
    <div className="eventFilterFour">
      {eventsFilter?.map((filterName, index) => {
        return (
          <label className="eventFilterFour__container" htmlFor={index}>
            <input
              type="radio"
              id={index}
              name="{index}"
              className="eventFilterFour__container-checkbox"
            />
            <span className="eventFilterFour__container-text">
              {filterName}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default EventFilterFour;
