import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    totalFees: {
        type: Number,
        required: true
    },

    paid: {
        type: Number,
        required: true
    },

    paymentAmount: {
        type: Number,
        required: true
    },

    remainingFees: {
        type: Number,
        required: true
    },

    paymentDate: {
        type: String,
        required: true
    },

    paymentMode: {
        type: String,
        required: true
    },

    paymentStatus: {
        type: String,
        required: true
    },

    upiId: {
        type: String
    },

    transactionId: {
        type: String
    }
});
const Payment = mongoose.model("Payment",paymentSchema);
export default Payment ;