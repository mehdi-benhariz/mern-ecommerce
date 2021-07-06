const express = require("express");
router = express.Router();

const { getProfile, editProfile } = require("../controllers/user");

const { auth } = require("../middleware/auth");

router.get("/profile", auth, getProfile);
router.post("/edit-profile", auth, editProfile);

module.exports = router;
