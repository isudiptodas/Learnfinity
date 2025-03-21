import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    displayname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    subscribed: {type: Boolean, default: false},
    profilePic : {type: String, default: ""},
    publicId : {type: String, default: ""},
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);