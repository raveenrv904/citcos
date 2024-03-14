const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Feedback = require("../models/Feeback");

const Filter = require("bad-words");

const createFeedback = async (req, res) => {
  const filter = new Filter();
  var newBadWords = [
    "fuckyou",
    "bullshit",
    "pussy",
    "bitch",
    "motherfucker",
    "asshole",
    "shit",
    "damm",
    "poop",
    "fuckoff",
    "dick",
    "suck",
    "holyshit",
    "dickhead",
  ];
  filter.addWords(...newBadWords);

  const { userId, feedback, anonymous } = req.body;
  if (!userId || !feedback || !anonymous) {
    throw new CustomError.NotFoundError(
      "Please provide user id, feedback and  isAnonymous"
    );
  }

  const cleanedFeedback = await filter.clean(feedback);
  const feedbackCreated = await Feedback.create({
    userId,
    feedback: cleanedFeedback,
    anonymous,
  });
  res.status(StatusCodes.CREATED).json({ feedbackCreated });
};

const getAllFeedback = async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ feedbacks, count: feedbacks.length });
};

module.exports = { createFeedback, getAllFeedback };
