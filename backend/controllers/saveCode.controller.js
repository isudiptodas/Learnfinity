import { Code } from '../models/codeHistory.models.js';

export const saveCode = async (req, res) => {

    const { code, generatedCode } = req.body;
    const userId = req.userId;

    try{
        const newCode = new Code({
            query: code,
            code: generatedCode,
            userId: userId,
        });

        const savedCode = await newCode.save();

        return res.status(200).json({
            success: true,
            message: "Code saved successfully",
            savedCode,
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Unable to save code"
        });
    }
}