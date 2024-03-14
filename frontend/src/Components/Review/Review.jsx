import React, { useEffect, useState } from "react";
import "./Review.css";

import { ReviewCard } from "../";
import axios from "axios";

const Review = () => {
  const [allFeedbacks, setAllFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/feedback/getAllFeedbacks", {
        crossdomain: true,
      })
      .then((response) => {
        setAllFeedbacks(response.data.feedbacks);
        // console.log(response.data.feedbacks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="review">
      {allFeedbacks &&
        allFeedbacks?.map((singleFeedback) => {
          var date = new Date(singleFeedback.createdAt);
          const realDate =
            date.getDate() +
            " " +
            date.toLocaleString("default", { month: "long" }) +
            " " +
            date.getFullYear();
          return (
            <ReviewCard
              username="Anonymous"
              time="08.14 am"
              date={realDate}
              userId={singleFeedback.userId}
              feedback={singleFeedback.feedback}
              isAnonymous={singleFeedback.anonymous}
            />
          );
        })}
    </div>
  );
};

export default Review;
