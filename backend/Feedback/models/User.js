const mongoose = require("mongoose");
const validator = require("validator");
const brcypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
    },
    password: String,
    college: String,
    liked: [],
    bookMarked: [],
    createdEvents: [],
    registeredEvents: [],
    friends: [],
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await brcypt.genSalt(10);
  this.password = await brcypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await brcypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
