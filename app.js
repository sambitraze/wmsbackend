require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const app = express();
const path = require("path");
const cors = require("cors");
const http = require("http");

const userRoute = require("./routes/user");

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

app.use("/api/user", userRoute);

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
