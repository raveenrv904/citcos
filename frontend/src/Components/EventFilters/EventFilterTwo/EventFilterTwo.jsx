import React from "react";
import "./EventFilterTwo.css";

const EventFilterTwo = () => {
  const eventsFilter = [
    "Tech Events",
    "Non Tech Events",
    "Sports Events",
    "Social Events ",
    "All events",
  ];

  return (
    <div className="eventFilterTwo">
      {eventsFilter?.map((filterName, index) => {
        return (
          <label className="eventFilterTwo__container" id={index}>
            <input
              type="checkbox"
              id={index}
              className="eventFilterTwo__container-checkbox"
            />
            <span className="eventFilterTwo__container-text">{filterName}</span>
          </label>
        );
      })}
    </div>
  );
};

export default EventFilterTwo;
