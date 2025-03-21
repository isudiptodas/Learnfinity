import { SavedDoc } from '../models/savedDoc.models.js';

export const getSavedDoc = async (req, res) => {
    const userId = req.userId;

    try{
        const allDoc = await SavedDoc.find({userId});

        if(!allDoc){
            return res.status(404).json({
                success: false,
                message: "No documentation found",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Documentation fetched successfully",
            allDoc
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to find documentation",
        });
    }
}