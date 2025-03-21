import { saveDoc } from '../controllers/saveDoc.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/doc', authenticateUser, saveDoc);

export default router;