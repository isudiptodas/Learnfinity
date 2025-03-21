import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    noteTime: {type: String, required: true},
    category: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const Note = mongoose.model("Note", noteSchema);
