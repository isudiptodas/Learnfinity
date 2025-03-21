import { User } from '../models/user.models.js';
import cloudinary from '../index.js';

export const deleteProfilePic = async (req, res) => {
    const userId = req.userId;
    const { publicId } = req.body;

    if(!userId){
        console.log("user id missing");
        return;
    }

    if(!publicId){
        console.error("public ID is missing ");
        return res.status(400);
    }
    try {

        const exist = await User.findById(userId);

        exist.profilePic = '';
        exist.publicId = '';

        const user = await exist.save();

        const cloudinaryRes = await cloudinary.uploader.destroy(publicId);

        if (cloudinaryRes.data.result !== 'ok') {
            // console.log(cloudinaryRes);
            return res.status(400).json({
                success: false,
                message: "Failed to delete image from Cloudinary",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile picture deleted successfully",
            user
        });
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}