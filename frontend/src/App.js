import "./App.css";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { MyContext } from "./MyContext";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isEvent, setIsEvent] = useState(false);
  const [isAcademic, setIsAcademic] = useState(false);

  const [isChatOpen, setIsChatOpen] = useState(true);

  const [openChat, setOpenChat] = useState([]);

  const [isShareOpen, setIsShareOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [createPost, setCreatePost] = useState(false);

  const [isEventPageOpen, setIsEventPageOpen] = useState(false);

  const [isEventFilterHide, setIsEventFilterHide] = useState(false);

  const [eventFilterData, setEventFilterData] = useState([
    {
      0: "Chennai",
    },
    {
      0: "Non Tech Events",
    },
    {
      0: "Entry Free",
    },
    {
      0: "Sort by : Upcoming Events",
    },
  ]);

  const [filterClicked, setFilterClicked] = useState("");

  const [academicFilterData, setAcademicFilterData] = useState([
    { 0: "Affiliated to Anna university" },
    { 0: "Regulation 2021-2025" },
    { 0: "Computer science engineering" },
  ]);

  const [academicFilterClicked, setAcademicFilterClicked] = useState("");
  const [isAcademicFilterHide, setIsAcademicFilterHide] = useState(false);

  const [isEventCreationHide, setIsEventCreationHide] = useState(false);

  const [isAcademicSearchHide, setIsAcademicSearchHide] = useState(false);

  const [eventDetails, setEventDetails] = useState([
    {
      eventName: "",
      eventDates: "",
      feesDetails: [],
      collegeName: "",
      description: "",
    },
  ]);

  const [loggedUser, setLoggedUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/v1/user/getSingleUser/6525519008cdd093f3e59e85",
        {
          crossdomain: true,
        }
      )
      .then((response) => {
        setLoggedUser(response.data.user);
        response.data.user.friends.forEach((friendId) => {
          fetchFriendsDetails(friendId);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [events]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/events/getAllEvents", {
        crossdomain: true,
      })
      .then((response) => {
        setEvents(response.data.events);
        // console.log(response.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(eventDetails);
  }, [eventDetails]);

  const fetchFriendsDetails = (friendId) => {
    axios
      .get(`http://localhost:8000/api/v1/user/getSingleUser/${friendId}`, {
        crossdomain: true,
      })
      .then((response) => {
        setFriends([response.data.user]);
        console.log(friends);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyContext.Provider
      value={{
        isHome,
        setIsHome,
        isEvent,
        setIsEvent,
        isAcademic,
        setIsAcademic,
        isChatOpen,
        setIsChatOpen,
        openChat,
        setOpenChat,
        isShareOpen,
        setIsShareOpen,

        isSearchOpen,
        setIsSearchOpen,

        isProfileOpen,
        setIsProfileOpen,

        createPost,
        setCreatePost,

        isEventPageOpen,
        setIsEventPageOpen,

        eventFilterData,
        setEventFilterData,

        filterClicked,
        setFilterClicked,

        isEventFilterHide,
        setIsEventFilterHide,

        academicFilterData,
        setAcademicFilterData,

        academicFilterClicked,
        setAcademicFilterClicked,

        isAcademicFilterHide,
        setIsAcademicFilterHide,

        isAcademicSearchHide,
        setIsAcademicSearchHide,

        isEventCreationHide,
        setIsEventCreationHide,

        eventDetails,
        setEventDetails,

        loggedUser,
        setLoggedUser,

        events,
        setEvents,

        friends,
        setFriends,
      }}
    >
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
