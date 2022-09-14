// const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },

  username: {
    type: String,
    required: true,
  },
  // first: {
  //   type: String,
  //   required: true,
  // },
  // last: {
  //   type: String,
  //   required: true,
  // },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  password: {
    type: String,
    required: true,
  },
  // gender: {
  //   type: String,
  //   required: true,
  // },
});

const UserModel = mongoose.model("users", UserSchema);
// module.exports = UserModel;
export default UserModel;
