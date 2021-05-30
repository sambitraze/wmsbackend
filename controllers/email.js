var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: "1906422@kiit.ac.in",
    pass: "c45bvLt9YMDawdk0",
  },
});

var mailOptions = {
  from: "1906422@kiit.ac.in",
  to: "majhisambit2@gmail",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

exports.sendOne = (req, res) => {
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  res.end();
};
