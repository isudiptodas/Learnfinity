import { SavedPost } from '../models/savedPost.models.js';
import { InterviewPost } from '../models/interviewPost.models.js';
import { Blogpost } from '../models/blogPost.models.js';

export const fetchSavedPost = async (req, res) => {

    const userId = req.userId;

    try{
        const found = await SavedPost.find({userId});

        if(!found){
            return res.status(404).json({
                success: false,
                message: "No post found",            
            });
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully", 
            found           
        });
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: "No post found",            
        });
    }
}

export const fetchInterviewPost = async (req, res) => {

    const userId = req.userId;

    try{
        const found = await InterviewPost.find({userId});

        if(!found){
            return res.status(404).json({
                success: false,
                message: "No post found",            
            });
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully", 
            found           
        });
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: "No post found",            
        });
    }
}

export const fetchBlogPost = async (req, res) => {

    const userId = req.userId;

    try{
        const found = await Blogpost.find({userId});

        if(!found){
            return res.status(404).json({
                success: false,
                message: "No post found",            
            });
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully",  
            found          
        });
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: "No post found",            
        });
    }
}