import { Text } from '../models/textHistory.models.js';

export const deleteText = async (req, res) => {
    const { id } = req.query;

    try{
        const deletedHistory = await Text.findByIdAndDelete(id);

        if(!deletedHistory){
            return res.status(404).json({
                success: false,
                message: "No history found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "History deleted successfully",
        });
    }
    catch(err){
        return res.status(404).json({
            success: false,
            message: "Unable to delete history",
        })
    }
}