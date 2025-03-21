import { User } from '../models/user.models.js';

export const saveProfilePic = async (req, res) => {
    const { imageURL, publicId } = req.body;
    const userId = req.userId;

    try {
        const exist = await User.findById(userId);

        if (!exist) {
            return res.status(404).json({
                success: false,
                message: "No user found",
            });
        }

        exist.profilePic = imageURL;
        exist.publicId = publicId;

        const user = await exist.save();

        return res.status(200).json({
            success: true,
            message: "Profile photo set successfully",
            user,
        });
    }
    catch (err) {
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }

}