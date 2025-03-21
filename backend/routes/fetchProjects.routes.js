import express from 'express';
import { fetchProjects } from '../controllers/fetchProjects.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';

const router = express.Router();

router.get('/projects', authenticateUser, fetchProjects);

export default router;