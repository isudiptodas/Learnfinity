import { User } from '../models/user.models.js';

export const verifyEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const exist = await User.findOne({ email });

        if (!exist) {
            return res.status(404).json({
                success: false,
                message: "Email address not found",
            });
        }

        return res.status(201).json({
            success: true,
            message: "Email ID found",
        });
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }

}