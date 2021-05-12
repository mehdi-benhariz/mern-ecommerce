const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAll,
  removeProduct,
  getProduct,
  updateProduct,
  search,
  getByCategory,
} = require("../controllers/product");
const { auth, admin } = require("../middleware/auth");
//get and delete method can't have a req.body
router.get("/all", getAll);
router.post("/add", auth, admin, addProduct);
router.post("/delete", auth, admin, removeProduct);
router.post("/detail", getProduct);
router.put("/edit", auth, admin, updateProduct);
router.get("/search", search);
router.get("/getByCat", getByCategory);
module.exports = router;
