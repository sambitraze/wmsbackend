var express = require("express");
var router = express.Router();

const routes = require("../controllers/meeting");

router.post("/create", routes.createMeeting);
router.get("/:id", routes.getMeetingById);
router.get("/",routes.getAllMeeting);
router.put("/update", routes.updateMeeting);
router.post("/date", routes.getMeetingByDate);

module.exports = router;