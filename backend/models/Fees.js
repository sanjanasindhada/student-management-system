import mongoose from "mongoose";
const feesSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    totalFees: {
        type: Number,
        required: true
    },
    paid: {
        type: Number,
        default: 0
    }
});
const Fees = mongoose.model("Fees", feesSchema);
export default Fees; 