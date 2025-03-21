import { savedPost } from '../controllers/savePost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/save/post',authenticateUser, savedPost);

export default router;