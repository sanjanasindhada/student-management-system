import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
const Attendance = mongoose.model(
    "Attendance",
    attendanceSchema
);
export default Attendance;