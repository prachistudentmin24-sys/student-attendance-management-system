const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:");
    console.log(err);
  });

app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/test", (req, res) => {
  res.send("Backend working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
