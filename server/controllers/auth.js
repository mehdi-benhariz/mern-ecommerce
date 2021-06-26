const User = require("../models/User");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT, getUserByToken } = require("../utils/auth");
var fs = require("fs");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const maxAge = 3600 * 24 * 10;

//creating an account
exports.signup = (req, res, next) => {
  let { name, email, password, password_confirmation } = req.body;
  console.log(req.body);
  let errors = [];
  if (!name) {
    errors.push({ name: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  // if (!emailRegexp.test(email)) {
  //   errors.push({ email: "invalid" });
  // }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          name: name,
          email: email,
          password: password,
        });

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            //saving user to db
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(400).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

//login to the account
exports.signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];

  if (!email) errors.push({ email: "required" });

  //  if (!emailRegexp.test(email)) {
  //    errors.push({ email: "invalid email" });
  //  }
  if (!password) errors.push({ passowrd: "required" });

  if (errors.length > 0) {
    console.log(errors);
    return res.status(400).json({ errors });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          errors: [{ user: "not found" }],
        });
      } else {
        console.log(user);
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch)
              return res
                .status(400)
                .json({ errors: [{ password: "incorrect" }] });

            let access_token = createJWT(user.email, user._id, 3600);
            jwt.verify(
              access_token,
              process.env.TOKEN_SECRET,
              (err, decoded) => {
                if (err) {
                  res.status(400).json({ erros: err });
                }
                if (decoded) {
                  return res
                    .status(200)
                    .cookie("token", access_token, {
                      httpOnly: true,
                      maxAge: maxAge * 1000,
                    })
                    .json({
                      success: true,
                      message: user,
                    });
                }
              }
            );
          })
          .catch((err) => {
            res.status(400).json({ erros: err });
          });
      }
    })
    .catch((err) => {
      res.status(400).json({ erros: err });
    });
};
//loggin out
exports.logOut = (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.redirect("/");
};
//check whether the user is logged or not
exports.userInfo = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    var user = await getUserByToken(token);
    res.status(200).json({ isLogged: true, isAdmin: user.isAdmin });
  } else res.json({ isLogged: false });
};
//upload profile image
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
    console.log();
    if (!Array.isArray(data.goods)) data.goods = [];
    data.push({ total, goods: [...data.goods, pannel] });
    const resp = await User.updateOne(
      { _id: user._id },
      { $set: { pannelProducts: [], historic: data } }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
//get the product inside the client's pannel
exports.pannelDetail = async (req, res) => {
  const { token } = req.cookies;
  try {
    const user = await getUserByToken(token);
    console.log(user);
    let data = user.pannelProducts;
    if (!data) return res.status(400).json({ error: "ID is required" });

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].product);
      const prod = await Product.findById(data[i].product);
      console.log({ prod });
      data[i] = { product: prod, quantity: data[i].quantity };
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
