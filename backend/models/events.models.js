import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const Events = mongoose.model("Event", eventSchema);