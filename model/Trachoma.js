import mongoose from "mongoose";

const TrachomaSchema = new mongoose.Schema({
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    symptom: {
        type: [String],
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default mongoose.model('Trachoma', TrachomaSchema)