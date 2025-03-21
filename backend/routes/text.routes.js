import { text } from '../controllers/text.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/text', authenticateUser, text);

export default router;