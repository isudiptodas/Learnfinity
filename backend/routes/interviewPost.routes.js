import { createInterviewPost } from '../controllers/interviewPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/api/create/interview/post',authenticateUser, createInterviewPost);

export default router;