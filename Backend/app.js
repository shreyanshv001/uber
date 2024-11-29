const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoute = require("./routes/user.routes");
const captainRoute = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");

connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRoute);
app.use("/captain", captainRoute);

module.exports = app;
