const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.register = async (req, res) => {
  const isEmailExist = await User.findOne({ email: req.body.email });

  if (isEmailExist)
    return res.status(400).json({ message: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
    isverified: true,
  });
  user.password = undefined;

  try {
    const savedUser = await user.save();
    res.json({
      message: "Sign up successfull",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({ message: "Email already exists" });
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ message: "Incorrect Email" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1y",
  });

  res.send({
    token: token,
    user: user,
  });
};

exports.verify = (req, res) => {
  const token = req.header("auth-token");
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      res
        .status(400)
        .send({ message: "Your session is expired please login again" });
    } else {
      next();
    }
  });
};
