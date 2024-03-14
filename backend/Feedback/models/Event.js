const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    userId: String,
    eventName: String,
    location: String,
    duration: String,
    eventDate: [],
    aboutTheEvent: String,
    image: String,
    organisationName: String,
    entryFees: String,
    fees: [],
    category: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", EventSchema);
