import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication token is missing!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        // console.log(req.userId);
        next();
    } catch (err) {
        return res.status(403).json({ success: false, message: 'Invalid token!' });
    }
};

