const express = require("express");
router = express.Router();

const { getAdminBoard, deleteUser } = require("../controllers/admin");

const { auth, admin } = require("../middleware/auth");

router.get("/", auth, admin, getAdminBoard);
router.post("/remove-user", auth, admin, deleteUser);
module.exports = router;
