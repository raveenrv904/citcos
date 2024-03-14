import React, { useState, useEffect, useContext } from "react";
import "./Home.css";

import { Navbar, Sidebar, Body } from "../../Components";

import { MyContext } from "../../MyContext";

const Home = () => {
  const { loggedUser } = useContext(MyContext);
  const [friends, setFriends] = useState([]);

  return (
    <div className="home">
      <div className="home__navbar">
        <Navbar />
      </div>
      <div className="home__body">
        <div className="home__body-left">
          <Sidebar />
        </div>
        <div className="home__body-right">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Home;
