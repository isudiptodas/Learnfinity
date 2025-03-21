import { User } from "../models/user.models.js";
import bcrypt from 'bcrypt';
import validator from "validator";

export const registerUser = async (req, res) => {
    const { name, displayName, email, password } = req.body;

    try{

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                success: false,
                message: "User with this email is already registered !",
            });
        }
    
        if(!validator.isEmail(email)){
            return res.status(400).json({
                success: false, 
                message: "Email is not valid",
            });
        }

        const displaynameavailable = await User.findOne({displayname: displayName});
        // console.log(displayName);

        if(displaynameavailable){
            return res.status(401).json({
                success: false,
                message: "Display name not available"
            });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
            name, email, displayname: displayName, password: hashedPassword
        });
    
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "User registered successfully !",
            user: savedUser,
        });
    }
    catch(err){
        console.error(err.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
   
};