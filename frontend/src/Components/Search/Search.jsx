import React, { useContext, useState } from "react";
import "./Search.css";

import SearchIcon from "../../assets/search icon.png";

import { AiFillCaretLeft } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";

import { MyContext } from "../../MyContext";

const Search = () => {
  const [recentSearch, setRecentSearch] = useState([
    "Takshashila cit chennai",
    "Texus",
    "VIT vellore",
    "OS notes",
  ]);

  const { isSearchOpen, setIsSearchOpen } = useContext(MyContext);

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__container-searchbox">
          <div className="search__container-searchbox--left">
            <AiFillCaretLeft
              className="search__container-searchbox--left-backIcon"
              onClick={() => {
                setIsSearchOpen(false);
              }}
            />
            <div className="search__container-searchbox--left-inputBox">
              <input
                type="text"
                className="search__container-searchbox--left-input"
                placeholder="Search for events, updates and notes here"
              />
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="search__container-searchbox--left-searchIcon"
              />
            </div>
          </div>
        </div>
        <div className="search__container-recentsearch">
          <h3 className="search__container-recentsearch--title">
            Recent searches
          </h3>
          <div className="search__container-recentsearch--searches">
            {recentSearch?.map((search, index) => {
              return (
                <div className="search__container-recentsearch--searches-container">
                  <BiUpArrowAlt className="search__container-recentsearch--searches-icon" />
                  <p
                    className="search__container-recentsearch--searches-title"
                    key={index}
                  >
                    {search}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
