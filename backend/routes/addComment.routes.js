import { addComment } from '../controllers/addComment.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.post('/add/comment',authenticateUser, addComment);

export default router;