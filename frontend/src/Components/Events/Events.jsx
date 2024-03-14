import React, { useContext } from "react";
import "./Events.css";

import { Card } from "../";

import { MyContext } from "../../MyContext";

const Events = () => {
  const { events } = useContext(MyContext);

  return (
    <div className="events">
      {events.map((event) => {
        return (
          <Card
            title1={event.eventName}
            // title2={event.title2}
            location={event.location}
            date={event.eventDate}
            image={event.image}
            detail={event}
          />
        );
      })}
    </div>
  );
};

export default Events;
