import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Student from './models/Student.js';
import Attendance from "./models/Attendance.js";
import Payment from './models/Payment.js';

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/coaching")
    .then(() => {
        console.log("mongodb connected")
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.post('/api/students', async (req, res) => {
    try {
        console.log("DATA FROM REACT:", req.body);
        const student = await Student.create(req.body);
        console.log("SAVED STUDENT:", student);
        res.status(201).json(student);
    }
    catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            message: "Student add error",
            error: error.message
        });
    }
})
app.post('/api/attendance', async (req, res) => {
    try {
        const { attendance, date, batch } = req.body;
        const attendanceData = Object.keys(attendance).map((studentId) => {
            return {
                studentId: studentId,
                date: date,
                batch: batch,
                status: attendance[studentId]
            };
        });
        const savedAttendance =
            await Attendance.insertMany(attendanceData);

        res.json({
            message: "Attendance saved successfully",
            data: savedAttendance
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error saving attendance"
        })
    }
})

app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            message: "Students fetch error",
            error: error.message
        })
    }
})
app.post('/api/payments', async (req, res) => {
    try {
        console.log("PAYMENT DATA:", req.body);
        const payment = await Payment.create(req.body);
        await Student.findOneAndUpdate(
            {name:req.body.studentName},
            {
                $inc: { paid: req.body.paymentAmount },
            }
        );
        console.log("SAVED PAYMENT:", payment);
        res.status(201).json(payment);
    }
    catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            message: "Payment Saved",
            error: error.message
        });
    }
})
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})