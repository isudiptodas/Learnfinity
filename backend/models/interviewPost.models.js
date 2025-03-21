import mongoose from 'mongoose';

const interviewSchema = mongoose.Schema({
    postTitle : {type: String, required: true},
    postTime : {type: String, required: true},
    postAuthor : {type: String, required: true},
    postDescription : {type: String, required: true},
    postImage: {type: String, required: false},
    // postLikes: {type: Number, default: 0},
    postTags: {type: [String], required: false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}); 
  
export const InterviewPost = mongoose.model("Interview_Post", interviewSchema);