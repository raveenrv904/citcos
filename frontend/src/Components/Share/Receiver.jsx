import React, { useState } from "react";
import "./Share.css";

import { User1 } from "../../assets";

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

const Receiver = ({ name, college }) => {
  const [receiver, setReceiver] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const checked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="share__middle-single" onClick={checked}>
      <div className="share__middle-left">
        <img
          src={User1}
          alt="Profile Icon"
          className="share__middle-left-profile"
        />
        <div className="share__middle-left-details">
          <h1 className="share__middle-left-details-name">{name}</h1>
          <p className="share__middle-left-details-college">{college}</p>
        </div>
      </div>
      <div className="share__middle-right">
        {!isChecked ? (
          <RiCheckboxBlankCircleLine className="share__middle-right-checkbox" />
        ) : (
          <RiCheckboxCircleFill className="share__middle-right-checkbox-blue" />
        )}
      </div>
    </div>
  );
};

export default Receiver;
