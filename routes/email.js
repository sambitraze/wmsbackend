var express = require("express");
var router = express.Router();

const routes = require("../controllers/email");

router.post("/send", routes.sendOne);

module.exports = router;