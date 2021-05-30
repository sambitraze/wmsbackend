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
  res.send("1.0.0");
});

app.get("/",(req,res)=>{res.send("server running!!!")});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/email", emailRoute);

const port  = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`run on ${port}`);
})
;
