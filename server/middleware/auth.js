const jwt = require("jsonwebtoken");
const User = require("../models/User");


const auth = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies)
  console.log({token})
  try {
    if (token) {
      const decode = await jwt.verify(token,process.env.TOKEN_SECRET);
      req.body = {
        ...req.body,
        user_id: decode._id,
      };
      next();
    } else {
      return res
        .status(403)
        .json({ message: "access denied" })
    }
  } catch (error) {
    console.log("error");
    console.log("err:", error);
  }
};

// const admin = async (req, res, next) => {
//   const { token } = req.cookies;
//   try {
//     if (token) {
//       const decode = await jwt.verify(token, JWT_SECRET);
//       User.findById(decode._id);

//       next();
//     } else {
//       return res
//         .status(403)
//         .json({ message: "access denied" })
//         .redirect("/login");
//     }
//   } catch (error) {
//     console.log("error");
//     console.log("err:", error);
//   }
// };

module.exports = { auth };
