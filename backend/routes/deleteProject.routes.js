import express from 'express';
import { deleteProject } from '../controllers/deleteProject.controller.js';

const router = express.Router();

router.delete('/projects/:id', deleteProject);

export default router;