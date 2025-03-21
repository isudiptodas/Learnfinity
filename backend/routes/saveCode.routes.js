import { saveCode } from '../controllers/saveCode.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/code', authenticateUser, saveCode);

export default router;