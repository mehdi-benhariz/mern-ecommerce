const Product = require("../models/Product");

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
  const { name, price, description, quantityStock } = req.body.newProduct;
  if (!name || !price || !description || !quantityStock)
    return res.status(400).json({ error: "all fields are required required" });

  try {
    const newProduct = new Product(req.body.newProduct);
    await newProduct.save();

    return res.status(200).json({ success: true });
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
    if (!removed) {
      return res.status(200).json({ success: true });
    } else return res.status(404).json({ error: "product doesn't exist" });
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
  let regex = search ? new RegExp(search) : null;

  try {
    const result = await Product.find({ name: regex });
    if (result.length > 0) return res.status(200).json(result);
    return res.status(400).json({ message: "no product was found!" });
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
  const { product } = req.body;

  try {
    // file upload handler
    if (req.files === null)
      return res.status(400).json({ message: "No file uploaded" });

    const file = req.files.file;
    const regex = /^image\/(png|jpg|jpeg)$/;
    console.log(req.files);
    if (!regex.test(file.mimetype))
      return res
        .status(400)
        .json({ message: "File type should be png, jpg, or jpeg" });
    const err = await file.mv(
      path.join(__dirname, "..", "public", "product_images", file.name)
    );
    product.product_images = `/product_images/${file.name}`;
    const newProduct = await product.save();
    res.json({ product: newProduct });

    // end file upload handler
  } catch (error) {
    next(error);
  }
};
