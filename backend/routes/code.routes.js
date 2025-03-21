import { CodeHistory } from '../controllers/code.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/code', authenticateUser, CodeHistory);

export default router;