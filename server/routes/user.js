const express = require("express");
router = express.Router();

const {
  getProfile,
  editProfile,
  buyProduct,
  pannelDetail,
  uploadPic,
} = require("../controllers/user");

const { auth } = require("../middleware/auth");

router.get("/profile", auth, getProfile);
router.post("/buy", auth, buyProduct);
//router.get("/pannel", auth, pannelDetail);
router.post("/upload-pic", auth, uploadPic);
router.post("/buy", auth, buyProduct);
router.post("/edit-profile", auth, editProfile);

module.exports = router;
