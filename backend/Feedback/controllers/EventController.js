const Event = require("../models/Event");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(StatusCodes.CREATED).json({ event });
};

const getAllEvent = async (req, res) => {
  const events = await Event.find({});
  res.status(StatusCodes.OK).json({ events, count: events.length });
};

const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findOne({ _id: id });
  if (!event) {
    throw new CustomError.NotFoundError(`Event with id:${id} not found`);
  }
  res.status(StatusCodes.OK).json({ event });
};

module.exports = { createEvent, getAllEvent, getSingleEvent };
