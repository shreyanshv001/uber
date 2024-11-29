const captainModel = require("../models/captainModel");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistTiken.model");

module.exports.registerCaptain = async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, status, location, vehicle } = req.body;
  // console.log(fullname, email, password, status, location, vehicle);

  const ifCaptainAlreadyExists = await captainModel.findOne({ email });
  if (ifCaptainAlreadyExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    password: hashedPassword,
    email,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET_KEY);

  return res.status(201).json({ token, captain });
};

module.exports.captainLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await bcrypt.compare(password, captain.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET_KEY);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.status(200).json({ token, captain });
};

module.exports.captainProfile = function (req, res, next) {
  res.status(200).json(req.captain);
};

module.exports.captainLogout = async (req, res, next) => {
  const token = req.cookie || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
