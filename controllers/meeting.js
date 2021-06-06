const Meeting = require("../models/meeting");

exports.getMeetingById = (req, res) => {
  Meeting.findById(req.params.id)
    .populate({
      path: "attendees",
      populate: {
        path: "user",
        models: "User",
      },
    })
    .populate("createdBy")
    .exec((err, meeting) => {
      if (err || !meeting) {
        return res.status(400).json({
          message: "No Meeting was found in DB",
        });
      }
      res.json(meeting);
    });
};

exports.getMeetingByDate = (req, res) => {
    Meeting.find({ date: req.body.date })
      .populate({
        path: "attendees",
        populate: {
          path: "user",
          models: "User",
        },
      })
      .populate("createdBy")
      .sort({"createdAt":-1})
      .exec((err, meeting) => {
        if (err || !meeting) {
          return res.status(400).json({
            message: "No Meeting was found in DB",
          });
        }
        res.json(meeting);
      });
  };

exports.createMeeting = (req, res) => {
  const meeting = new Meeting(req.body);
  meeting.save((err, meet) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        message: "error saving meeting in DB",
      });
    }
    res.json(meet);
  });
};

exports.getAllMeeting = (req, res) => {
  Meeting.find()
    .populate({
      path: "attendees",
      populate: {
        path: "user",
        models: "User",
      },
    })
    .populate("createdBy")
    .sort({"createdAt":-1})
    .exec((err, meeting) => {
      if (err) {
        res.status(400).json({
          message: "No meetings are found",
        });
      }
      res.json(meeting);
    });
};

exports.updateMeeting = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, meeting) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: "You are not authorized to update this meeting",
        });
      }
      res.json(meeting);
    }
  );
};

// exports.userCount = (req, res) => {
//   User.collection.countDocuments({}, (err, usercount) => {
//     if (err) {
//       res.status(400).json({
//         error: "user count error",
//       });
//     } else {
//       res.json({
//         usercount,
//       });
//     }
//   });
// };
