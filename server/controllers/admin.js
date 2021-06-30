const Product = require("../models/Product");
const User = require("../models/User");

exports.getAdminBoard = async (req, res) => {
  var users = await User.fond();
  var products = await Product.find();
  var revenue = [{}];
  var i = 0;
  users.forEach((user) => {
    user.historic.forEach((op) => {});
  });
  return res.status(200).json({ users, products, revenue });
};
