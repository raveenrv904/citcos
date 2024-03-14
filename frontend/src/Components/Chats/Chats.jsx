import React, { useContext } from "react";
import "./Chats.css";

import {
  BiSolidUpArrow,
  BiSolidDownArrow,
  BiSolidNotification,
} from "react-icons/bi";

import { UserChatOuter } from "../";
import { PersonalChat } from "../../container";

import { MyContext } from "../../MyContext";

const Chats = () => {
  const { isChatOpen, setIsChatOpen, openChat, friends } =
    useContext(MyContext);

  const handleOpenChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // const personalDetails = [
  //   {
  //     name: "Raveen",
  //     college: "CIT Chennai",
  //   },
  //   {
  //     name: "jey",
  //     college: "CIT Chennai",
  //   },
  //   {
  //     name: "Anan",
  //     college: "RIT Chennai",
  //   },
  //   {
  //     name: "Raveen",
  //     college: "CIT Chennai",
  //   },
  //   {
  //     name: "Raveen",
  //     college: "CIT Chennai",
  //   },
  //   {
  //     name: "Raveen",
  //     college: "CIT Chennai",
  //   },
  // ];

  return (
    <div className="chats">
      <div className={`${openChat.length === 0 ? "chats__private" : "hide"}`}>
        <div className="chats__private-head ">
          <div className="chats__private-head-left">
            <h1 className="chats__private-head-left-text">Private Messages</h1>
          </div>
          <div className="chats__private-head-right">
            <BiSolidNotification className="chats__private-head-right-icon" />
            {isChatOpen ? (
              <BiSolidDownArrow
                className="chats__private-head-right-icon"
                onClick={handleOpenChat}
              />
            ) : (
              <BiSolidUpArrow
                className="chats__private-head-right-icon"
                onClick={handleOpenChat}
              />
            )}
          </div>
        </div>
        <div className={` ${isChatOpen ? "chats__private-body" : "hide"}`}>
          {friends?.map((friend) => {
            return (
              <UserChatOuter username={friend.name} college={friend.college} />
            );
          })}
        </div>
      </div>
      <div className={`${openChat.length === 1 ? "chats__personal" : "hide"}`}>
        {openChat?.map((chat) => {
          return <PersonalChat name={chat.username} college={chat.college} />;
        })}
      </div>
    </div>
  );
};

export default Chats;
