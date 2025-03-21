import { saveVideo } from '../controllers/saveVideo.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/video', authenticateUser, saveVideo);

export default router;