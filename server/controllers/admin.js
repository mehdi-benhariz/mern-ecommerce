const Product = require("../models/Product");
const User = require("../models/User");

exports.getAdminBoard = async (req, res) => {
  var users = await User.find();
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
  return res.status(200).json({ revenuePerMonth });
};
