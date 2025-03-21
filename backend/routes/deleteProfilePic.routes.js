import { deleteProfilePic } from '../controllers/deleteProfilePic.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.delete('/delete/image', authenticateUser, deleteProfilePic);

export default router;