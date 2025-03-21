import { Comment } from '../models/comment.models.js';

export const deleteComment = async (req, res) => {
    const { commentId } = req.params;

    // console.log(commentId);
    // console.log("hello");

    try{
        const foundComment = await Comment.findByIdAndDelete(commentId);
        console.log(foundComment);
        if(!foundComment){
            return res.status(404).json({
                success: false,
                message: "Comment not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Comment deleted",
        });
    }
    catch(err){
        console.log(err.message);
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}