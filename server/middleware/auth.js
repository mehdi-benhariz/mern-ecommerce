const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
      req.body = {
        ...req.body,
        user_id: decode._id,
      };
      next();
    } else {
      return res.status(403).json({ message: "access denied" });
    }
  } catch (error) {
    console.log("error");
    console.log("err:", error);
  }
};

exports.admin = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
    const user =  User.findById(decode.userId);
    if(user.isAdmin)
      next();
    else
     return res.status(403).json({ message: "access denied" });

  } catch (error) {
    console.log("error");
    console.log("err:", error);
  }

};
