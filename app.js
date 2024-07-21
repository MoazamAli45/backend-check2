const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
};

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the User Registration API");
});
app.get("/income-statement", async (req, res) => {
  try {
    const incomeStatement = await IncomeStatementModel.find();

    res.status(201).json(incomeStatement[0].income);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.use(express.json());
// imports
const user = require("./routes/userRoutes");
const quarter = require("./routes/quarterRoutes");
const income = require("./routes/IncomeRoutes");
const admin = require("./routes/adminRoute");
const quarter2 = require("./routes/quarter2Route");
const IncomeStatementModel = require("./Model/IncomeStatementModel");

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/health", (req, res) => {
  res.status(200).json("Health checking");
});

app.use("/api/v1", user);
app.use("/api/v1", quarter);
app.use("/api/v1/quarter2", quarter2);
app.use("/api/v1", income);
app.use("/api/v1", admin);

module.exports = app;
