import { Comment } from '../models/comment.models.js';
import { User } from '../models/user.models.js';

export const addComment = async (req, res) => {
    const { comment, date, postId } = req.body;
    const userId = req.userId;

    try{
        const userFound = await User.findById(userId);

        if(!userFound){
            return res.status(404).json({
                success: false,
                message: "No user found",
                userFound
            });
        } 

        const newComment = new Comment({
            comment: comment,
            commentDate: date,
            authorName: userFound.displayname,
            userId,
            postId,
            commentPhoto: userFound.profilePic || ''
        });

        await newComment.save();

        return res.status(200).json({
            success: true,
            message: "Comment added",
            newComment
        });
    }
    catch(err){

        console.log(err.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}