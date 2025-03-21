import { User } from '../models/user.models.js';

export const updateUser = async (req, res) => {
    const { newName, newEmail, newDisplayName } = req.body;
    const userId  = req.userId;
    console.log(userId);

    try{
        const exist = await User.findById(userId);

        if(!exist){
            return res.status(404).json({
                success: false,
                message: "User not find"
            });
        }

        if(newName === exist.name && newEmail === exist.email && newDisplayName === exist.displayname){
            return res.status(200).json({
                success: false,
                message: "No changes detected",
            });
        }

        if(newEmail !== exist.email){
            const emailExist = await User.findOne({ email: newEmail });
            if(emailExist){
                return res.status(400).json({
                    success: false,
                    message: "This email is already in use by someone else",
                });
            } 
        }

        if (newDisplayName !== exist.displayname) {
            const displaynameExist = await User.findOne({ displayname: newDisplayName });
            if (displaynameExist) {
                return res.status(400).json({
                    success: false,
                    message: "Display name is not available",
                });
            }
        }

        exist.name = newName || exist.name;
        exist.email = newEmail || exist.email;
        exist.displayname = newDisplayName || exist.displayname;

        await exist.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }
}
