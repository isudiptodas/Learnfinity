import { saveProfilePic } from '../controllers/saveProfilePic.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/image/save', authenticateUser, saveProfilePic);

export default router;