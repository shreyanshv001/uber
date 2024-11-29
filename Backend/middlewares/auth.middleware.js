const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captainModel");
const blacklistedModel = require("../models/blacklistTiken.model");

module.exports.authUser = async function (req, res, next) {
  const token =
    (req.cookies && req.cookies.token) ||
    (req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null);
  if (!token) return res.status(401).json({ error: "No token provided" });

  const isBlacklistToken = await blacklistedModel.findOne({ token: token });

  if (isBlacklistToken) {
    return res.status(401).json({ error: "Token is blacklisted" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userModel.findById(decoded._id);
    if (!req.user) return res.status(401).json({ error: "User not found" });
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports.authCaptain = async function (req, res, next) {
  const token =
    (req.cookies && req.cookies.token) ||
    (req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null);
  if (!token) return res.status(401).json({ error: "No token provided" });

  const isBlacklistToken = await blacklistedModel.findOne({ token: token });

  if (isBlacklistToken) {
    return res.status(401).json({ error: "Token is blacklisted" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.captain = await captainModel.findById(decoded._id);
    if (!req.captain)
      return res.status(401).json({ error: "Captain not found" });
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};
