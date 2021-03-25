const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAll,
  removeProduct,
  getProduct,
  updateProduct,
  search,
  getByCategory
} = require("../controllers/product");
const { auth ,admin} = require("../middleware/auth");

router.get("/all", getAll);
router.post("/add",auth,admin,addProduct);
router.delete("/delete", auth, admin, removeProduct);
router.get("/detail", getProduct);
router.put("/edit", auth, admin, updateProduct);
router.get("/search", search);
router.get("/getByCat",getByCategory);
module.exports = router;
