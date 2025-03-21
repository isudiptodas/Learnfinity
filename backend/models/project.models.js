import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    projectTitle: {type: String, required: true},
    htmlValue: {type: String, required: true},
    cssValue: {type: String, required: true},
    jsValue: {type: String,},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const Project = mongoose.model("Project", projectSchema);