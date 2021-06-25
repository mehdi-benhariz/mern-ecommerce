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
  uploadImage,
} = require("../controllers/product");
const { auth, admin } = require("../middleware/auth");
//get and delete method can't have a req.body
router.get("/all", getAll);
router.post("/add", auth, admin, addProduct);
router.post("/upload-pic", auth, admin, uploadImage);
router.post("/delete", auth, admin, removeProduct);
router.post("/detail", getProduct);
router.put("/edit", auth, admin, updateProduct);
router.get("/search", search);
router.get("/getByCat/:cId", getByCategory);
module.exports = router;
