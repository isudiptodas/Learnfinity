import { savedVideos } from '../controllers/getSavedVideos.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/saved/videos', authenticateUser, savedVideos);

export default router;