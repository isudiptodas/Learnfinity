import mongoose from 'mongoose';

const savedPostSchema = mongoose.Schema({
    postTitle: { type: String, required: true },
    postAuthor: { type: String, required: true },
    postDescription: { type: String, required: true },
    postImage: { type: String, required: false },
    // postLikes: {type: Number, default: 0},
    postTags: { type: [String], required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const SavedPost = mongoose.model("Saved_Post", savedPostSchema);