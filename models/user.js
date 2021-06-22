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
      github: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
      twitter: {
        type: Boolean,
        default: false,
      },
      isverified: {
        type: Boolean,
        default: false,
      },
      photoUrl: {
        type: String,
        default: "https://res.cloudinary.com/sambitraze/image/upload/v1622954053/dummy_gk6oij.png"

      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("User", userSchema, "users");