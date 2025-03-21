import express from 'express';
import { fetchAllBlogPost } from '../controllers/fetchBlogPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';

const router = express.Router();

router.get('/get/posts/blog',authenticateUser, fetchAllBlogPost);

export default router;