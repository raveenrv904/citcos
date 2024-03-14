const express = require("express");
const router = express.Router();

const { getAllUser, getSingleUser } = require("../controllers/User");

router.route("/getAllUser").get(getAllUser);

router.route("/getSingleUser/:id").get(getSingleUser);

module.exports = router;
