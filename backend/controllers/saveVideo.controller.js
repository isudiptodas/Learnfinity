import { SavedVideo } from '../models/savedVideo.models.js';

export const saveVideo = async (req, res) => {
    const userId = req.userId;
    const { title, desc, link } = req.body;

    try{
        const newSave = SavedVideo({
            title,
            desc,
            link,
            userId,
        });
    
        await newSave.save();

        return res.status(200).json({
            success: true,
            message: "Video saved successfully",
            newSave,
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to save video",
        });
    }


}