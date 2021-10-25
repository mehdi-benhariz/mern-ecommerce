const express = require("express");
const { pannelDetail } = require("../controllers/user");
const router = express.Router();

const {
  addProduct,
  getAll,
  removeProduct,
  getProduct,
  updateProduct,
  search,
  getByCategory,
  addToPannel,
} = require("../controllers/product");
const { auth, admin } = require("../middleware/auth");
//get and delete method can't have a req.body
//TODO: refactor routes
router.get("/all", getAll);
router.post("/add", auth, admin, addProduct);
router.post("/delete", auth, admin, removeProduct);
router.post("/detail", getProduct);
router.put("/edit", auth, admin, updateProduct);
router.post("/search", search);
router.get("/getByCat/:cId", getByCategory);
router.get("/pannel", auth, pannelDetail);
router.post("/pannel/add", auth, addToPannel);
module.exports = router;
