import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    commentDate: {type: String, required: true},
    authorName: {type: String, required: true},
    postId: {type: String, required: true, unique: false},
    commentPhoto: {type: String, required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    // userId: {type: String},
}, {
    timestamps: true
} );

export const Comment = mongoose.model("Comment", commentSchema);