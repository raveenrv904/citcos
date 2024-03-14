import React, { useContext } from "react";
import "./EventPageCard.css";

import { Card } from "../";
import { MyContext } from "../../MyContext";

const EventPageCard = () => {
  const { events } = useContext(MyContext);

  return (
    <div className="eventPageCard">
      <div className="eventPageCard__body">
        {events?.map((event) => {
          return (
            <div className="eventPage__body-gap">
              <Card
                title1={event.eventName}
                // title2={event.title2}
                location={event.location}
                date={event.eventDate}
                image={event.image}
                detail={event}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventPageCard;
