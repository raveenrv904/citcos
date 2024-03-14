import React, { useContext } from "react";
import "./PersonalChat.css";

import { BiSolidLeftArrow, BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";

import { User1 } from "../../assets";

import { MyContext } from "../../MyContext";

import { MessageCard } from "../../Components";

const PersonalChat = ({ name, profile, college }) => {
  const { openChat, setOpenChat } = useContext(MyContext);

  const closeChat = () => {
    setOpenChat([]);
    console.log(openChat);
  };
  return (
    <div className="personalChat">
      <div className="personalChat-cover">
        <div className="personalChat__top">
          <div className="personalChat__left">
            <BiSolidLeftArrow
              className="personalChat__left-icon"
              onClick={closeChat}
            />
            <div className="personalChat__left-details">
              <img
                src={User1}
                alt="Profile"
                className="personalChat__left-details-profile"
              />
              <div className="personalChat__left-details-profile-personal">
                <div className="personalChat__left-details-profile-personal-name">
                  {name}
                </div>
                <div className="personalChat__left-details-profile-personal-college">
                  Student at {college}
                </div>
              </div>
            </div>
          </div>
          <div className="personalChat__right">
            <BiDotsVerticalRounded className="personalChat__right-option" />
          </div>
        </div>
        <hr className="chat__horizontalLine" />
      </div>

      <div className="personalChat__middle">
        <MessageCard />
      </div>
      <div className="personalChat__bottom">
        <div className="personalChat__bottom-msgBox">
          <input
            type="text"
            placeholder="Type here to send"
            className="personalChat__bottom-msgBox-input"
          />
          <IoMdSend className="personalChat__bottom-msgBox-sendIcon" />
        </div>
      </div>
    </div>
  );
};

export default PersonalChat;
