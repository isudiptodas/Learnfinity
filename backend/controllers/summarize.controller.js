import { Summarize } from '../models/summarizeHistory.models.js';

export const summarize = async (req, res) => {
    const userId = req.userId;

    try{
        const history = await Summarize.find({userId});

        if(!history){
            return res.status(404).json({
                success: false,
                message: "No history found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "History fetched successfully",
            history
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to fetch history",
        });
    }
}