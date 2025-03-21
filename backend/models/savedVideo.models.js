import mongoose from 'mongoose';

const savedVideoSchema = mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    link: {type: String, required: true, unique: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const SavedVideo = mongoose.model("SavedVideo", savedVideoSchema);