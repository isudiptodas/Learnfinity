import { Summarize } from '../models/summarizeHistory.models.js';

export const saveSummary = async (req, res) => {

    const { text, summary } = req.body;
    const userId = req.userId;

    try{
        const newSummary = new Summarize({
            query: text,
            summary: summary,
            userId: userId,
        });

        const savedSummary = await newSummary.save();

        return res.status(200).json({
            success: true,
            message: "Summary saved successfully",
            savedSummary,
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Unable to save summary"
        });
    }
}