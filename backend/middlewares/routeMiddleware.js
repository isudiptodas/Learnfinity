import jwt from 'jsonwebtoken';

export const protectedRoute = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            succes: false,
            message: "Authorization required"
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        console.error(err.mesage);
        return res.status(401).json({
            success: false,
            message: "Invalid token !"
        });
    }
};