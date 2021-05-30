var express = require("express");
var router = express.Router();

const {verify} = require("../controllers/auth");

const routes = require("../controllers/user");

router.get("/", verify ,routes.getAllUsers);
router.get("/user/:id", routes.getUserById);
router.get("/email/:email", routes.getUserByEmail);
router.get("/count", routes.userCount);
router.put("/update", routes.updateUser);

module.exports = router;