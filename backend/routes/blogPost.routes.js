import { createBlogPost } from '../controllers/blogPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/create/blog/post',authenticateUser, createBlogPost);

export default router;