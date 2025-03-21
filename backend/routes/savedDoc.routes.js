import { getSavedDoc } from '../controllers/getSavedDoc.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.get('/saved/doc', authenticateUser, getSavedDoc);

export default router;