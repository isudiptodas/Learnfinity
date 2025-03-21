import express from 'express';
import { fetchAllInterviewPost } from '../controllers/fetchInterviewPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';

const router = express.Router();

router.get('/get/posts/interview',  fetchAllInterviewPost);

export default router;