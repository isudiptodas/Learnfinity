import { SavedDoc } from '../models/savedDoc.models.js';

export const deleteSavedDoc = async (req, res) => {
    const docId = req.params.id;
    const userId = req.userId;

    try{
        const deletedDoc = await SavedDoc.findByIdAndDelete(docId);
        
        if(deletedDoc){
            const allDoc = await SavedDoc.find({userId});
            if(allDoc){
                return res.status(200).json({
                    success: true,
                    allDoc,
                });
            }
        }

        return res.status(404).json({
            success: false,
            message: "No documentation found",
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Unable to delete documentation",
        });
    }
}