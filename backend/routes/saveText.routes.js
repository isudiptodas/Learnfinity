import { saveText } from '../controllers/saveText.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/text', authenticateUser, saveText);

export default router;