const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    userId: String,
    feedback: String,
    anonymous: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedback", FeedbackSchema);
