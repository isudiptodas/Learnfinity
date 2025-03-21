import { deleteBlogPost, deleteSavedPost, deleteInterviewPost } from '../controllers/deleteSavedPost.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.delete('/delete/saved/post/:id', deleteSavedPost);
router.delete('/delete/interview/post/:id', deleteInterviewPost);
router.delete('/delete/blog/post/:id', deleteBlogPost);

export default router;