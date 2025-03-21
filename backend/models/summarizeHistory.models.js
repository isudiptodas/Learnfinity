import mongoose from 'mongoose';

const summarizeSchema = mongoose.Schema({
    query: {type: String, required: true},
    summary: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true}); 

export const Summarize = mongoose.model("Summarize", summarizeSchema);