import { Blogpost } from '../models/blogPost.models.js';
import { InterviewPost } from '../models/interviewPost.models.js';
import { SavedPost } from '../models/savedPost.models.js';

export const deleteSavedPost = async (req, res) => {
    const postId  = req.params.id;
    
    try{
        const deleted = await SavedPost.findByIdAndDelete(postId);

        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

export const deleteInterviewPost = async (req, res) => {
    const postId  = req.params.id;

    try{
        const deleted = await InterviewPost.findByIdAndDelete(postId);

        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

export const deleteBlogPost = async (req, res) => {
    const postId  = req.params.id;

    try{
        const deleted = await Blogpost.findByIdAndDelete(postId);

        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}