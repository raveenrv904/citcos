const express = require("express");
const router = express.Router();
const cors = require("cors");

const {
  createFeedback,
  getAllFeedback,
} = require("../controllers/FeedbackController");

router.route("/createFeedback").post(createFeedback);
router.route("/getAllFeedbacks").get(getAllFeedback);

module.exports = router;
