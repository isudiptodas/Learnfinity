import mongoose from 'mongoose';

const codeSchema = mongoose.Schema({
    query: {type: String, required: true},
    code: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

export const Code = mongoose.model("Code", codeSchema);