import { fetchAllComment } from '../controllers/fetchAllComments.controller.js';
import express from 'express';

const router = express.Router();

router.post('/fetch/comments', fetchAllComment);

export default router;