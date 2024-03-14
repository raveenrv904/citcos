import React, { useContext, useState } from "react";
import "./Body.css";

import { Events, Review, Chats } from "../../Components";
import { MainEvents, Academics } from "../";
import { PostCreation } from "../../container";

import { MyContext } from "../../MyContext";
import { RiAddBoxLine } from "react-icons/ri";

const Body = () => {
  const { isHome, isEvent, isAcademic, createPost, setCreatePost } =
    useContext(MyContext);
  const onCreatePost = () => {
    setCreatePost(!createPost);
  };

  if (isHome === true && isEvent === false && isAcademic === false) {
    return (
      <div className="body">
        <div className="body__events">
          <Events />
        </div>
        <div className="body__feedbacks">
          <div className="body__feedback-left">
            <Review />
          </div>
          <div className="mainEvents__right">
            <div className="mainEvents__right-bottom">
              <div className="mainEvents__right-bottom-button">
                <button
                  className="mainEvents__right-bottom-postEvent"
                  onClick={onCreatePost}
                >
                  <RiAddBoxLine className="mainEvents__right-bottom-postEvent-Icon" />
                  <h1 className="mainEvents__right-bottom-postEvent-title">
                    Write a Post
                  </h1>
                </button>
              </div>
              <div className="mainEvents__right-bottom-chat">
                <Chats />
              </div>
              {createPost && (
                <div className="div">
                  <div
                    className="showWindow__backgound1"
                    onClick={onCreatePost}
                  ></div>
                  <div className="shareWindow ">
                    <PostCreation />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isHome === false && isEvent === true && isAcademic === false) {
    return (
      <div className="body">
        <MainEvents />
      </div>
    );
  } else if (isHome === false && isEvent === false && isAcademic === true) {
    return (
      <div className="body">
        <Academics />
      </div>
    );
  }
};

export default Body;
