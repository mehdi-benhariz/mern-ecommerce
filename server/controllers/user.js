const User = require("../models/User");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Token = require("../models/Token");
const crypto = require("crypto");
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
