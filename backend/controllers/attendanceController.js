const Attendance = require("../models/Attendance");

exports.markAttendance = async(req,res)=>{
    try{

        const attendance = await Attendance.create({
            studentId:req.user.id,
            status:"Present"
        });

        res.status(201).json(attendance);

    }catch(err){
        res.status(500).json(err);
    }
};

exports.getReport = async(req,res)=>{
    try{

        const report = await Attendance.find({
            studentId:req.user.id
        });

        res.json(report);

    }catch(err){
        res.status(500).json(err);
    }
};