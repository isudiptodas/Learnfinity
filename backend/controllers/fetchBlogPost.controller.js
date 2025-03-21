import { Blogpost } from '../models/blogPost.models.js';

export const fetchAllBlogPost = async (req, res) => {
    const userId = req.userId;

    try{
        const found = await Blogpost.find({userId});

        if(!found || found.length === 0){
            return res.status(404).json({
                success: false,
                message: "No post found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully",
            found,
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}