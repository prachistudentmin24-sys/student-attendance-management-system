const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const existing = await Attendance.findOne({
      studentId: req.user.id,
      date: {
        $gte: today,
        $lt: tomorrow,
      },
    });

    if (existing) {
      return res.status(400).json({
        message: "Attendance already marked today",
      });
    }

    const attendance = await Attendance.create({
      studentId: req.user.id,
      status: "Present",
    });

    res.status(201).json({
      message: "Attendance marked successfully",
      attendance,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getReport = async (req, res) => {
  try {
    const report = await Attendance.find({
      studentId: req.user.id,
    }).sort({ date: -1 });

    res.json(report);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
