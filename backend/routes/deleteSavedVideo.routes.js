import { deleteVideo } from '../controllers/deleteSavedVideo.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.delete('/video/:id', authenticateUser, deleteVideo);

export default router;