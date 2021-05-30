var express = require("express");
var router = express.Router();

const routes = require("../controllers/user");

router.get("/", routes.getUserById);

module.exports = router;