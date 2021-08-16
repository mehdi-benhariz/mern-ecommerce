const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logOut,
  userInfo,
  resetPWD,
  resetPWDverif,
} = require("../controllers/auth");
const { auth } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logOut", auth, logOut);
router.get("/userInfo", auth, userInfo);
router.post("/pwd-reset", resetPWD);
router.post("/verify-reset", resetPWDverif);
module.exports = router;
