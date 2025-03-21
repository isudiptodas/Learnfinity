import { SavedVideo } from '../models/savedVideo.models.js';

export const savedVideos = async (req, res) => {
    const userId = req.userId;

    try{
        const savedVideos = await SavedVideo.find({userId});

        if(!savedVideos){
            return res.status(400).json({
                success: false,
                message: "No saved videos found",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Saved videos fetched successfully",
            savedVideos
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to fetch videos",
        });
    }
}