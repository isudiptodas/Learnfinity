import { InterviewPost } from '../models/interviewPost.models.js';

export const fetchAllInterviewPost = async (req, res) => {
    const userId = req.userId;

    try{
        const found = await InterviewPost.find();

        // console.log(found);

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