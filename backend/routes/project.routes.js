import express from 'express';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import { saveProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/projects', authenticateUser, saveProject);

export default router;