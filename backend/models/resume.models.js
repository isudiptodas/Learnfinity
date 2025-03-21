import mongoose from 'mongoose';

const resumeSchema = mongoose.Schema({
    title: {type: String, required: true}, 
    name: {type: String, required: true}, 
    email: {type: String, required: true}, 
    contact: {type: String, required: true}, 
    social1: {type: String, required: false}, 
    social2: {type: String, required: false}, 
    edu1: {type: String, required: true}, 
    edu1start: {type: String, required: true}, 
    edu1end: {type: String, required: true}, 
    edu1grade: {type: String, required: true}, 
    edu2: {type: String, required: false}, 
    edu2start: {type: String, required: false}, 
    edu2end: {type: String, required: false}, 
    edu2grade: {type: String, required: false}, 
    exp1: {type: String, required: false}, 
    exp1detail: {type: String, required: false}, 
    exp2: {type: String, required: false}, 
    exp2detail: {type: String, required: false}, 
    skill1: {type: String, required: true}, 
    skill2: {type: String, required: false}, 
    skill3: {type: String, required: false}, 
    project1: {type: String, required: false}, 
    project1detail: {type: String, required: false}, 
    project2: {type: String, required: false}, 
    project2detail: {type: String, required: false}, 
    project3: {type: String, required: false}, 
    project3detail: {type: String, required: false}, 
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export const Resume = mongoose.model("Resume", resumeSchema);