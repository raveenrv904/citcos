import React, { useContext } from "react";
import "./Share.css";

import { AiOutlineLink } from "react-icons/ai";
import { BiSolidLeftArrow } from "react-icons/bi";
import { GMail } from "../../assets";
import Receiver from "./Receiver";

import { MyContext } from "../../MyContext";
const Share = () => {
  const { setIsShareOpen, friends } = useContext(MyContext);

  const closed = () => {
    setIsShareOpen(false);
  };

  return (
    <div className="share">
      <div className="share__top">
        <div className="share__top--back">
          <BiSolidLeftArrow
            className="share__top--back-icon"
            onClick={closed}
          />
        </div>
        <div className="share__top--icon">
          <AiOutlineLink className="share__top--icon-link" />
        </div>
        <div className="share__top--icon">
          <img
            src={GMail}
            alt="Gmail Logo"
            className="share__top--icon-gmail"
          />
        </div>
      </div>

      <div className="share__middle-cover">
        <div className="share__middle">
          {friends?.map((friend) => {
            return <Receiver name={friend.name} college={friend.college} />;
          })}
        </div>
      </div>
      <div className="horizonal-line-Share">
        <hr className="horizonal-line-Share-Icon" />
      </div>
      <div className="share__bottom">
        <div className="share__bottom-cover">
          <p className="share__bottom-button">Send</p>
        </div>
      </div>
    </div>
  );
};

export default Share;
