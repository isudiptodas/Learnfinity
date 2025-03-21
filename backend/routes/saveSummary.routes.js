import { saveSummary } from '../controllers/saveSummary.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/summary', authenticateUser, saveSummary);

export default router;