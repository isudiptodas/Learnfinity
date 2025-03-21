import { summarize } from '../controllers/summarize.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/summarize', authenticateUser, summarize);

export default router;