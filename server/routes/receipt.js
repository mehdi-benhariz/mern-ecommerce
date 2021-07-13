const express = require("express");
router = express.Router();

const {
  getList,
  getReceipt,
  removeReceipt,
  addReceipt,
  updateReceipt,
} = require("../controllers/receipt");

const { auth, admin } = require("../middleware/auth");

router.get("/all", auth, admin, getList);
router.post("/", auth, admin, getReceipt);
router.post("/add", auth, admin, addReceipt);
router.post("/remove", auth, admin, removeReceipt);
router.put("/edit", auth, admin, updateReceipt);

module.exports = router;
