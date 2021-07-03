const Product = require("../models/Product");
const User = require("../models/User");

exports.getAdminBoard = async (req, res, next) => {
  try {
    var users = await User.find({ isAdmin: false }).limit(10);
    var products = await Product.find();
    var revenuePerMonth = new Array(12).fill(0);
    var revenuePerCat = new Array(3).fill({});
    var i = 0;
    users.forEach((user) => {
      user.historic.forEach(({ date, total }) => {
        i = date.getMonth();
        revenuePerMonth[i] += total;
      });
    });
    return res.status(200).json({ users, revenuePerMonth });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.body;
  console.log(id);
  if (!id) return res.status(400).json({ error: "ID is required" });
  try {
    const removed = await User.findByIdAndRemove(id);
    if (!removed) return res.status(200).json({ success: true });
    else return res.status(404).json({ error: "user doesn't exist" });
  } catch (error) {
    next(error);
  }
};
