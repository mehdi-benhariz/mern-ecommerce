const Product = require("../models/Product");
const User = require("../models/User");

exports.getAdminBoard = async (req, res, next) => {
  try {
    var users = await User.find({ isAdmin: false }).limit(10);
    var products = await Product.find();
    var receipts = await Receipt.find();
    var revenuePerMonth = new Array(12).fill(0);
    var receiptPerMoonth = new Array(12).fill(0);
    var revenuePerCat = new Map();
    revenuePerCat.set("clothes", { val: 0, nbr: 0 });
    revenuePerCat.set("electronic", { val: 0, nbr: 0 });
    revenuePerCat.set("food", { val: 0, nbr: 0 });

    var i = 0;

    receipts.forEach((receipt) => {
      i = receipt.date.getMonth();
      receiptPerMoonth[i] += receipt.total;
    });
    users.forEach((user) => {
      user.historic.forEach(({ date, total, goods }) => {
        console.log(goods);
        //todo fix the revenu per category
        // goods.forEach((good) => {
        //   console.log(tag);
        //   var tag = good.product.tags[0];
        //   var obj = revenuePerCat.get(tag);
        //   revenuePerCat.set(tag, {
        //     val: obj.val + good.product.price * good.quantity,
        //     nbr: obj.nbr + good.quantity,
        //   });
        // });

        i = date.getMonth();
        revenuePerMonth[i] += total - receiptPerMoonth[i];
      });
    });
    return res.status(200).json({ users, revenuePerMonth, revenuePerCat });
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
