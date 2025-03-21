import { User } from '../models/user.models.js';
import bcrypt from 'bcrypt';

export const resetPassword = async (req, res) => {
    const { password, email } = req.body;

    try {
        const exist = await User.findOne({ email });

        if (!exist) {
            return res.status(404).json({
                success: false,
                message: "Email not found",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        exist.password = hashedPassword;

        await exist.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        });
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}
