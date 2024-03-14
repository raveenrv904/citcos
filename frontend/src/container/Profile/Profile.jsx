import React, { useContext, useState } from "react";
import "./Profile.css";

import { AiOutlineCaretLeft } from "react-icons/ai";

import { ProfileImg, IdProof, Event, Pdf, Placement } from "../../assets";

import { MyContext } from "../../MyContext";

const Profile = () => {
  const [myDetails] = useState([
    "B.sc. Mathematics ",
    "Student at loyola college ",
    "Chennai",
  ]);

  const { setIsProfileOpen } = useContext(MyContext);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__container-top">
          <AiOutlineCaretLeft
            className="profile__container--top-beckIcon"
            onClick={() => {
              setIsProfileOpen(false);
            }}
          />
          <h2 className="profile__container--top-title">Your Profile</h2>
        </div>
        <div className="profile__container-bottom">
          <div className="profile__container-bottom--left">
            <img
              src={ProfileImg}
              alt="profile"
              className="profile__container-bottom--left-profile"
            />
            <h2 className="profile__container-bottom--left-title">
              Richard Sanchez
            </h2>
          </div>
          <div className="profile__container-bottom--right">
            <div className="profile__container-bottom--right-top">
              <div className="profile__container-bottom--right-top-details">
                <h2 className="profile__container-bottom--right-top-details-title">
                  My Details
                </h2>
                <ul className="profile__container-bottom--right-top-details-bulletPoints">
                  {myDetails?.map((detail, index) => {
                    return (
                      <li
                        className="profile__container-bottom--right-top-details-bulletPoints-point"
                        key={index}
                      >
                        {detail}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="profile__container-bottom--right-top-idProof">
                <img
                  src={IdProof}
                  alt="id-proof"
                  className="profile__container-bottom--right-top-idProof-img"
                />
                <h3 className="profile__container-bottom--right-top-idProof-title">
                  ID Proof
                </h3>
              </div>
            </div>
            <div className="profile__container-bottom--right-bottom">
              <h2 className="profile__container-bottom--right-bottom-title">
                My Posts
              </h2>
              <div className="profile__container-bottom--right-bottom-other">
                <div className="profile__container-bottom--right-bottom-other-event">
                  <img
                    src={Event}
                    alt="eventImg"
                    className="profile__container-bottom--right-bottom-other-event-img"
                  />
                  <h2 className="profile__container-bottom--right-bottom-other-event-title">
                    Takshashila Event
                  </h2>
                </div>
                <div className="profile__container-bottom--right-bottom-other-pdf">
                  <img
                    src={Pdf}
                    alt="eventImg"
                    className="profile__container-bottom--right-bottom-other-pdf-img"
                  />
                  <h2 className="profile__container-bottom--right-bottom-other-pdf-title">
                    OS Unit 1
                  </h2>
                </div>
                <div className="profile__container-bottom--right-bottom-other-placement">
                  <img
                    src={Placement}
                    alt="eventImg"
                    className="profile__container-bottom--right-bottom-other-placement-img"
                  />
                  <h2 className="profile__container-bottom--right-bottom-other-placement-title">
                    OS Unit 1
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
