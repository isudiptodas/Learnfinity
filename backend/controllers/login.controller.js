import { User } from "../models/user.models.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const loginUser =  async (req, res) => {
    
    const { email, password, isChecked } = req.body;
    // console.log(email, password);

    try{
        const exist = await User.findOne({ email });
        // console.log(exist);

        if(!exist){
            return res.status(404).json({
                success: false,
                message: "No user found with this email ! ",
            });
        }

        const matched = await bcrypt.compare(password, exist.password);
        // console.log(matched);

        if(!matched){
            return res.status(400).json({
                success: false,
                message: "Password is incorrect !",
            });
        }

        let tokenExpiry;

        if(isChecked){
            tokenExpiry = '7d';
        }
        else{
            tokenExpiry = '1h';
        }
        
        const token = jwt.sign({id: exist._id, name: exist.name, displayname: exist.displayname}, process.env.JWT_SECRET, {expiresIn: tokenExpiry});

        return res.status(200).json({
            success: true,
            message: "Login successfull !",
            token,
            exist
        })
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success: false,
            message: "An error occurred while logging in. Please try again.",
        });
    }
};