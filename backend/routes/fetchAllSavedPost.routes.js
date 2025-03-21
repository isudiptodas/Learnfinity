import { fetchBlogPost, fetchInterviewPost, fetchSavedPost } from '../controllers/fetchAllSavedPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/fetch/saved/posts', authenticateUser, fetchSavedPost );
router.get('/fetch/blog/posts', authenticateUser, fetchBlogPost );
router.get('/fetch/interview/posts',authenticateUser, fetchInterviewPost );

export default router;