import express from 'express';
import { saveResume, getResume, fetchResume, deleteResume } from '../controllers/resume.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';

const router = express.Router();

router.post('/save/resume', authenticateUser, saveResume);
router.get('/get/resume-titles', authenticateUser, getResume);
router.get('/get/all-resume', authenticateUser, fetchResume);
router.delete('/delete/resume/:id', deleteResume);

export default router;