const CustomError = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getAllUser = async (req, res) => {
  const user = await User.find({}).select("-password");
  res.status(StatusCodes.OK).json({ user, count: user.length });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(`User with id: ${id} not found`);
  }
  res.status(StatusCodes.OK).json({ user });
};

module.exports = { getAllUser, getSingleUser };
