import mongoose from 'mongoose';

const docSchema = mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    link: {type: String, required: true, unique: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export const SavedDoc = mongoose.model("SavedDoc", docSchema);