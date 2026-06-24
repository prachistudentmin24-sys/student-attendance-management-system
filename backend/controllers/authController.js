const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{
    try{
        const {email,password}=req.body;

        const student = await Student.findOne({email});

        if(!student)
            return res.status(404).json({
                message:"Student not found"
            });

        const match = await bcrypt.compare(
            password,
            student.password
        );

        if(!match)
            return res.status(400).json({
                message:"Wrong Password"
            });

        const token = jwt.sign(
            {id:student._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );

        res.json({
        token,
        student: {
        id: student._id,
        name: student.name,
        email: student.email
    }
});

    }catch(err){
        res.status(500).json(err);
    }
};
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await Student.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create student
        const student = await Student.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
        message: "User registered successfully",
        user: {
        id: student._id,
        name: student.name,
        email: student.email
    }
});

    } catch (err) {
        res.status(500).json(err);
    }
};