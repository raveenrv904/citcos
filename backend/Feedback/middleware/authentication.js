const CustomError = require("../errors");
const { isValidToken } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  // console.log(token);
  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication invalid");
  }
  try {
    const payload = isValidToken({ token });
    req.user = {
      name: payload.name,
      userId: payload.userId,
      role: payload.role,
    };
    next();
  } catch (err) {
    throw new CustomError.UnauthenticatedError("Authentication invalid");
  }
};

const autherizePermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.unAuthorized("Unauthorized access to this route");
    }
    next();
  };
};

module.exports = { authenticateUser, autherizePermission };
