import { Text } from '../models/textHistory.models.js';

export const saveText = async (req, res) => {

    const { text, generatedText } = req.body;
    const userId = req.userId;

    try{
        const newText = new Text({
            query: text,
            text: generatedText,
            userId: userId,
        });

        const savedText = await newText.save();

        return res.status(200).json({
            success: true,
            message: "Text saved successfully",
            savedText,
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Unable to save Text"
        });
    }
}