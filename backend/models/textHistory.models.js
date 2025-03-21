import mongoose from 'mongoose';

const textSchema = mongoose.Schema({
    query: {type: String, required: true},
    text: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const Text = mongoose.model("Text", textSchema);