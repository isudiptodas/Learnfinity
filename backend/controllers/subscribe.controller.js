import { User } from '../models/user.models.js';

export const subscribe = async (req, res) => {
    const { email, subscribed } = req.body;

    try{
        const exist = await User.findOne({email});

    if(!exist){
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    exist.subscribed = subscribed;

    await exist.save();

    return res.status(200).json({
        success: true,
        message: 'Subscription status updated',
        exist,
    });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}