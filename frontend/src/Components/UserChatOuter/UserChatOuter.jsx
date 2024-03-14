import React, { useContext } from "react";
import "./UserChatOuter.css";

import { BiDotsVerticalRounded } from "react-icons/bi";

import { User1 } from "../../assets";

import { MyContext } from "../../MyContext";

const UserChatOuter = ({ username, college }) => {
  const { setOpenChat } = useContext(MyContext);
  const pushDate = () => {
    setOpenChat([{ username, college }]);
  };

  return (
    <div className="userChatOuter" onClick={pushDate}>
      <div className="userChatOuter__container">
        <div className="userChatOuter__container-left">
          <div className="userChatOuter__container-left-profile">
            <img
              src={User1}
              alt="Profile Img"
              className="userChatOuter__container-left-profileIcon"
            />
          </div>
          <div className="userChatOuter__container-left-desc">
            <div className="userChatOuter__container-left-desc-top">
              <h1 className="userChatOuter__container-left-desc-top-name">
                {username}
              </h1>
              <p className="userChatOuter__container-left-desc-top-college">
                . Student at {college}
              </p>
            </div>
            <div className="userChatOuter__container-left-desc-bottom">
              <p className="userChatOuter__container-left-desc-bottom-desc">
                Hey we are conducting a fest at our college !
              </p>
            </div>
          </div>
        </div>
        <div className="userChatOuter__container-right">
          <BiDotsVerticalRounded className="userChatOuter__container-right-option" />
        </div>
      </div>
      <div className="chats__horizontalLine">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="1"
          viewBox="0 0 390 1"
          fill="none"
        >
          <path
            d="M1 0.75H389"
            stroke="black"
            stroke-opacity="0.25"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserChatOuter;
