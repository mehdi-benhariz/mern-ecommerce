const User = require("../models/User");
const Product = require("../models/Product");
const { getUserByToken } = require("../utils/auth");
var fs = require("fs");

exports.getProfile = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const user = await getUserByToken(token);
    if (!user) return res.status(400).json({});
    const { adress, phone, gender } = user;

    const isComplete = !!adress && !!phone && !!gender;

    return res.status(200).json({ user, isComplete });
  } catch (error) {
    next(error);
  }
};

exports.editProfile = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const user = await getUserByToken(token);
    if (!user) return res.status(400).json("user doesn't exist");
    const { newUser } = req.body;
    if (!newUser) return res.status(400).json("body required!");

    const updated = await User.findByIdAndUpdate(user._id, newUser, {
      new: true,
    });
    if (!updated) return res.status(500).json({ error: "couldn't update !" });
    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
//upload a picture for the profile
exports.uploadPic = async (req, res) => {
  const { token } = req.cookies;
  const { userPhoto } = req.files;
  const types = [
    "image/bmp",
    "image/gif ",
    "image/jpeg",
    "image/png ",
    "image/webp",
    "image/tiff",
  ];

  if (!userPhoto || !types.inlcudes(userPhoto.mimetype))
    return res.status(400).json({ error: "photo is required" });
  try {
    let user = await getUserByToken(token);
    user.img.data = fs.readFileSync(req.files.userPhoto.data);
    user.img.contentType = userPhoto.mimetype;
  } catch (err) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};

//add a product inside the pannel
exports.buyProduct = async (req, res) => {
  let { pannel, total } = req.body;
  const { token } = req.cookies;

  if (!pannel) return res.status(400).json({ error: "pannel is empty" });
  if (!total) total = 0;

  try {
    let user = await getUserByToken(token);
    let data = user.historic;
    pannel.forEach(async (element) => {
      await Product.updateOne(
        { _id: element.product._id },
        {
          $set: {
            quantityStock: element.product.quantityStock - element.quantity,
          },
        }
      );
    });
    if (!Array.isArray(data.goods)) data.goods = [{}];
    data.push({ total, goods: [...data.goods, pannel] });
    const resp = await User.updateOne(
      { _id: user._id },
      { $set: { pannelProducts: [], historic: data } }
    );
    if (resp)
      pannel.forEach(async (element) => {
        await Product.updateOne(
          { _id: element.product._id },
          {
            $set: {
              quantityStock: element.product.quantityStock - element.quantity,
            },
          }
        );
      });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
//get the product inside the client's pannel
exports.pannelDetail = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const user = await getUserByToken(token);
    const { historic } = user;
    console.log({ historic });
    let data = user.pannelProducts;
    if (!data) return res.status(400).json({ error: "ID is required" });

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].product);
      const prod = await Product.findById(data[i].product);
      console.log({ prod });
      data[i] = { product: prod, quantity: data[i].quantity };
    }

    return res.status(200).json({ data, historic });
  } catch (error) {
    next(error);
  }
};
