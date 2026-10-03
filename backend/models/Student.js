import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    totalFees:{
        type:Number
    }
})
const Student = mongoose.model("Student",studentSchema);
export default Student;