const express = require("express");
const router = express.Router();

const {
  createEvent,
  getSingleEvent,
  getAllEvent,
} = require("../controllers/EventController");

router.route("/createEvent").post(createEvent);
router.route("/getAllEvents").get(getAllEvent);
router.route("/getSingleEvent/:id").get(getSingleEvent);

module.exports = router;
