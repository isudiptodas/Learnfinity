import { authenticateUser } from '../middlewares/useridMiddleware.js';
import { userData } from '../controllers/userdata.controller.js';
import express from 'express';

const router = express.Router();

router.get('/details', authenticateUser, userData);

export default router;