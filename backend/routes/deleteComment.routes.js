import { deleteComment } from '../controllers/deleteComment.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.delete('/delete/comment/:commentId', deleteComment);

export default router;