import React, { useContext } from "react";
import "./Navbar.css";

import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search icon.png";
import ProfilePic from "../../assets/profile.png";
import Sidebar from "../../assets/sidebar.png";
import axios from "axios";

import { Search } from "../";
import { Profile } from "../../container";

import { MyContext } from "../../MyContext";

const Navbar = () => {
  const { isSearchOpen, setIsSearchOpen, isProfileOpen, setIsProfileOpen } =
    useContext(MyContext);

  const handleClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="cover">
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left-logo">
            <img src={Logo} alt="Logo" className="main-logo" />
          </div>
        </div>
        <div className="navbar__middle">
          <div className="navbar__middle-search">
            <img src={SearchIcon} alt="Search Icon" className="search" />
          </div>
          <div className="navbar__middle-input">
            <input
              type="text"
              className="searchinput"
              placeholder="Search for Events, Updates and Notes"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="navbar__right">
          <div className="navbar__right-profile">
            <img
              src={ProfilePic}
              alt="user-profile"
              className="userProfile"
              onClick={handleProfile}
            />
          </div>
          <div className="navbar__right-profile">
            <img src={Sidebar} alt="Sidebar" className="sidebar__option" />
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="div10">
          <div className="showWindow__background10" onClick={handleClick}></div>
          <div className="shareWindow11">
            <Search />
          </div>
        </div>
      )}

      {isProfileOpen && (
        <div className="div10">
          <div
            className="showWindow__background10"
            onClick={handleProfile}
          ></div>
          <div className="shareWindow10">
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
