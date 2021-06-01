const mongoose = require("mongoose");

var participantSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mail: {
    type: String,
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
});

var userSchema = mongoose.Schema(
  {
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
    date: {
      type: String,
    },
    topic: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    meetLink: {
      type: String,
      trim: true,
    },
    mom: {
      type: String,
      trim: true,
    },
    momBy: {
      type: String,
      trim: true,
    },
    attendees: [participantSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meeting", userSchema, "meetings");
