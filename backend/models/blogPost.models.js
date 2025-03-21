import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    postTitle : {type: String, required: true},
    postTime : {type: String, required: true},
    postAuthor : {type: String, required: true},
    postDescription : {type: String, required: true},
    postImage: {type: String, required: false},
    // postLikes: {type: Number, default: 0},
    postTags: {type: [String], required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

export const Blogpost = mongoose.model("Blog_Post", blogSchema);