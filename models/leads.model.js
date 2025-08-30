import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String
    },
    message: {
        type: String
    }
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;