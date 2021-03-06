require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const app = express();
const path = require("path");
const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const emailRoute = require("./routes/email");
const meetingRoute = require("./routes/meeting");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.get("/version", (req, res) => {
  res.json({"version": "1.0.0+1","updateLink": "https://github.com/sambitraze/work_management_app/raw/master/release/app-release.apk"});
});

app.get("/",(req,res)=>{res.send("server running!!!")});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/email", emailRoute);
app.use("/api/meeting", meetingRoute);

const port  = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`run on ${port}`);
})
;
