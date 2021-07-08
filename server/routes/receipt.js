const express = require("express");
router = express.Router();

const {
  getList,
  getReceipt,
  deleteReceipt,
  addReceipt,
  updateReceipt,
} = require("../controllers/receipt");

const { auth, admin } = require("../middleware/auth");

router.get("/", auth, admin, getList);
router.get("/one", auth, admin, getReceipt);
router.post("/add", auth, admin, addReceipt);
router.post("/remove", auth, admin, removeReceipt);
router.put("/edit", auth, admin, updateReceipt);

module.exports = router;
