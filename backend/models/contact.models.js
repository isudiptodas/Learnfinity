import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    userName : {type: String, required: true},
    userEmail : {type: String, required: true},
    userQuery : {type: String, required: true},
    userQueryDescription : {type: String, required: true},
}, {timestamps: true});

export const contactMessage = mongoose.model("Contact", contactSchema);