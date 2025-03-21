import { Comment } from '../models/comment.models.js';

export const fetchAllComment = async (req, res) => {
    const { postId }  = req.body;
    // console.log(postId);

    try{
        const foundComment = await Comment.find({ postId });
        // console.log(foundComment);

        if(!foundComment){
            return res.status(404).json({
                success: false,
                message: "No comments found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Comments fetched successfully",
            foundComment,
        });

    }
    catch(err){

        // console.log(err.message);
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}