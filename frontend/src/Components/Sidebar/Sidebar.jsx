import React, { useContext, useState } from "react";
import "./Sidebar.css";

import { Home, Calender, Graduation } from "../../assets";

import { MyContext } from "../../MyContext";

const Sidebar = () => {
  const [home, setHome] = useState(true);
  const [event, setEvent] = useState(false);
  const [academic, setAcademic] = useState(false);

  const { setIsHome, setIsEvent, setIsAcademic } = useContext(MyContext);

  const homeOn = () => {
    setHome(true);
    setIsHome(true);
    setEvent(false);
    setIsEvent(false);
    setAcademic(false);
    setIsAcademic(false);
  };
  const eventOn = () => {
    setHome(false);
    setIsHome(false);
    setEvent(true);
    setIsEvent(true);
    setAcademic(false);
    setIsAcademic(false);
  };
  const academicOn = () => {
    setHome(false);
    setIsHome(false);
    setEvent(false);
    setIsEvent(false);
    setAcademic(true);
    setIsAcademic(true);
  };

  return (
    <div className="sidebar">
      <div className={!home ? "sidebar__container hide" : "sidebar__container"}>
        <div className="sidebar__home" onClick={homeOn}>
          <img src={Home} alt="Home Icon" className="sidebar__home-icon" />
          <h2 className="sidebar__home-text">Home</h2>
        </div>
        <div className="sidebar__other">
          <img src={Calender} alt="Calender Icon" onClick={eventOn} />
          <img src={Graduation} alt="Graduation Icon" onClick={academicOn} />
        </div>
      </div>

      <div
        className={!event ? "sidebar__container hide" : "sidebar__container"}
      >
        <div className="sidebar__other1">
          <img src={Home} alt="Home Icon" onClick={homeOn} />
        </div>
        <div className="sidebar__home" onClick={eventOn}>
          <img
            src={Calender}
            alt="Calender Icon"
            className="sidebar__home-icon"
          />
          <h2 className="sidebar__home-text">Events</h2>
        </div>
        <div className="sidebar__other1">
          <img src={Graduation} alt="Graduation Icon" onClick={academicOn} />
        </div>
      </div>

      <div
        className={!academic ? "sidebar__container hide" : "sidebar__container"}
      >
        <div className="sidebar__other">
          <img src={Home} alt="Home Icon" onClick={homeOn} />
          <img src={Calender} alt="Calender Icon" onClick={eventOn} />
        </div>
        <div className="sidebar__home-new" onClick={academicOn}>
          <img
            src={Graduation}
            alt="Graduation Icon"
            className="sidebar__home-icon"
          />
          <h2 className="sidebar__home-text">Academics</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
