const Product = require("../models/Product");
const path = require("path");
const { getUserByToken } = require("../utils/auth");
const { decodeImg, dataValidation } = require("../utils/product");
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: "there was some error" });
  }
};
//add a new product
exports.addProduct = async (req, res) => {
  // let errors = dataValidation(req);
  // if (errors.length !== 0) return res.status(400).json(errors);

  try {
    console.log(req.body.newProduct);
    const newProduct = new Product(req.body.newProduct);
    await newProduct.save();
    console.log(req.body);
    decodeImg(req.body.newProduct.image, newProduct._id);
    return res.status(200).json({ success: true, newProduct });
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
//delete a product
exports.removeProduct = async (req, res) => {
  const { pId } = req.body;
  console.log(pId);
  if (!pId) return res.status(400).json({ error: "ID is required" });

  try {
    const removed = await Product.findByIdAndRemove(pId);
    if (!removed) return res.status(200).json({ success: true });
    else return res.status(404).json({ error: "product doesn't exist" });
  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//get one product by Id
exports.getProduct = async (req, res) => {
  const { pId } = req.body;

  if (!pId) return res.status(400).json({ error: "ID is required" });

  try {
    const product = await Product.findById(pId);
    if (!product) return res.status(404).json({ error: "not found" });
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//update a product
exports.updateProduct = async (req, res) => {
  const { pId, editProduct } = req.body;

  if (!pId) return res.status(400).json({ error: "ID is required" });

  if (!editProduct)
    return res.status(400).json({ error: "new product is required" });

  try {
    const updated = await Product.findByIdAndUpdate(pId, editProduct, {
      new: true,
    });
    if (!updated) return res.status(500).json({ error: "couldn't update !" });
    return res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//detailed search
exports.search = async (req, res) => {
  const { search } = req.body;
  console.log(req.body);
  const regex = search ? new RegExp(search) : null;

  if (regex !== null)
    try {
      console.log(search);
      const result = await Product.find({ name: regex });
      console.log(result);
      return res.status(200).json(result);
    } catch (err) {
      res.status(500).json("there was an error!");
      console.log(err);
    }
};
//get by category
exports.getByCategory = async (req, res) => {
  const { cId } = req.params;
  try {
    const result = await Product.find({ tags: cId });
    if (result.length > 0) return res.status(200).json(result);
    return res.status(400).json({ message: "no product was found!" });
  } catch (err) {
    res.status(500).json("there was an error!");
    console.log(err);
  }
};

//upload image
exports.uploadImage = async (req, res, next) => {
  console.log("");
  const { pId } = req.params;
  // const product = await Product.findById(pId);
  // console.log(product);

  // file upload handler

  console.log(req.files);
  if (!req.files) return res.status(400).json({ message: "No file uploaded" });
  const file = req.files.myFile;
  const regex = /^image\/(png|jpg|jpeg)$/;
  console.log(file);
  if (!regex.test(file.mimetype))
    return res
      .status(400)
      .json({ message: "File type should be png, jpg, or jpeg" });
  const err = await file.mv(
    path.join(__dirname, "..", "public", "product_images", file.name)
  );
  return res.status(200).json("success");
  // const newProduct = await product.save();
  // res.json({ product: newProduct });

  // end file upload handler
};

//
exports.addToPannel = async (req, res) => {
  const { token } = req.cookies;
  const { pId } = req.body;
  let exist = false;
  try {
    const user = await getUserByToken(token);
    console.log(user);
    let data = user.pannelProducts;
    if (!data) return res.status(400).json({ error: "ID is required" });
    data.forEach((e) => {
      if (e["product"]._id === pId) {
        exist = true;
        return res.status(200).json("already in pannel!");
      }
    });
    const prod = await Product.findById(pId);
    console.log({ prod });
    data.push({ product: prod, quantity: 0 });
    const resp = await User.updateOne(
      { _id: user._id },
      { $set: { pannelProducts: data } }
    );

    return res.status(200).json(resp["ok"]);
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
