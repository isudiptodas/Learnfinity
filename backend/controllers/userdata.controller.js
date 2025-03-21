
import { User } from '../models/user.models.js';

export const userData =  async (req, res) => {
    try{
        const userId  = req.userId;
        const exist = await User.findById(userId);

        if(!exist){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User found",
            exist,
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Error fetching user data",
        });
    }
}