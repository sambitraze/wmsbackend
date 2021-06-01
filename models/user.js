const mongoose = require("mongoose");

var userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        maxlength: 64,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        trim: true,
        required: true,
      },
      phone: {
        type: String,
        trim: true,
      },
      roll: {
        type: String,
        trim: true,
      },
      dob: {
        type: String,
        trim: true,
      },
      desgination: {
        type: String,
        trim: true,
      },
      department: {
        type: String,
        trim: true,
      },
      email2: {
        type: String,
        trim: true,
      },
      usertype: {
        type: String,
        trim: true,
      },
      blocked: {
        type: Boolean,
        default: false,
      },
      isverified: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("User", userSchema, "users");