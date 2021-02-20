const express = require("express");
const router = express.Router();
const {
  getAll,
  addProduct,
  removeProduct,
  updateProduct,
  getProduct,
  search,
} = require("../controllers/product");

router.get("/all", getAll);
router.post("/add", addProduct);
router.delete("/delete", removeProduct);
router.get("/detail", getProduct);
router.put("/edit", updateProduct);
router.get("/search", search);

module.exports = router;
