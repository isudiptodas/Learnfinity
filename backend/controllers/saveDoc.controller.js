import { SavedDoc } from '../models/savedDoc.models.js';

export const saveDoc = async (req, res) => {
    const { title, desc, link } = req.body;
    const userId = req.userId;

    try{
        const savedDoc = new SavedDoc({
            title, 
            desc,
            link,
            userId: userId
        });

        await savedDoc.save();

        return res.status(200).json({
            success: true,
            message: "Documentation saved successfully",
            // savedDoc
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to save documentation",
        });
    }
}