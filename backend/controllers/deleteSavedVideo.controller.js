import { SavedVideo } from '../models/savedVideo.models.js';

export const deleteVideo = async (req, res) => {
    const videoId = req.params.id;
    const userId = req.userId;

    try{
        const deletedVideo = await SavedVideo.findByIdAndDelete(videoId);

        if(deletedVideo){
            const allVideos = await SavedVideo.find({userId});
            return res.status(201).json({
                success: true,
                message: "Video deleted successfully",
                allVideos
            });
        }
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}
