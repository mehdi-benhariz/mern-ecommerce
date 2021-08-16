const User = require("../models/User");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Token = require("../models/Token");
const sendEmail = require("../utils/mail");
const crypto = require("crypto");
const { createJWT, getUserByToken } = require("../utils/auth");
var fs = require("fs");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const maxAge = 3600 * 24 * 10;

const handleErrorSignUp = (req) => {
  let { name, email, password, password_confirmation } = req.body;
  console.log(req.body);
  let errors = [];
  if (!name) errors.push({ name: "required" });

  if (!email) errors.push({ email: "required" });

  // if (!emailRegexp.test(email)) {
  //   errors.push({ email: "invalid" });
  // }
  if (!password) errors.push({ password: "required" });

  if (!password_confirmation)
    errors.push({
      password_confirmation: "required",
    });

  if (password != password_confirmation) errors.push({ password: "mismatch" });
  return errors;
};
//creating an account
exports.signup = (req, res, next) => {
  var errors = handleErrorSignUp(req);
  if (errors.length > 0) return res.status(400).json({ errors });
  const { email, name, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user)
        return res
          .status(400)
          .json({ errors: [{ user: "email already exists" }] });
      else {
        const user = new User({
          name,
          email,
          password,
        });

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            //saving user to db
            user
              .save()
              .then((response) =>
                res.status(200).json({
                  success: true,
                  message: response,
                })
              )
              .catch((err) =>
                res.status(400).json({
                  errors: [{ error: err }],
                })
              );
          });
        });
      }
    })
    .catch((err) => next(err));
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
      if (!user)
        return res.status(400).json({
          errors: [{ user: "not found" }],
        });
      else {
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
    const { adress, phone, gender } = user;

    const profileCompleted = !!adress && !!phone && !!gender;
    res
      .status(200)
      .json({ isLogged: true, isAdmin: user.isAdmin, profileCompleted });
  } else res.json({ isLogged: false });
};

//create password reset
exports.resetPWD = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json("invalid email");
    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);
    console.log(`reset link sent to ${user.email} with link ${link}`);
    res.send("password reset link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

exports.resetPWDverif = async (req, res) => {
  try {
    //    const schema = Joi.object({ password: Joi.string().required() });
    //  const { error } = schema.validate(req.body);
    //  if (error) return res.status(400).send(error.details[0].message);
    //TODO :add a body verification
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};
