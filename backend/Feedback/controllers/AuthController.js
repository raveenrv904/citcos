const User = require("../models/User");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const register = async (req, res) => {
  const { name, email, password, college } = req.body;
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email Alreay Exists");
  }

  const isFirstAccount = await User.countDocuments({});
  const role = isFirstAccount == 0 ? "admin" : "user";
  const user = await User.create({ name, email, password, college, role });
  res.status(StatusCodes.CREATED).json({ user });
};
module.exports = {
  register,
};
