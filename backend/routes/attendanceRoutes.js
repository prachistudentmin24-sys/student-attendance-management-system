const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getReport,
} = require("../controllers/attendanceController");

const auth = require("../middleware/authMiddleware");

router.post("/mark", auth, markAttendance);

router.get("/report", auth, getReport);

module.exports = router;
