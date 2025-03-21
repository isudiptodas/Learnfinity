import { deleteSavedDoc } from '../controllers/deleteSavedDoc.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import express from 'express';

const router = express.Router();

router.delete('/doc/:id', authenticateUser, deleteSavedDoc);

export default router;