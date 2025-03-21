import { deleteSummary } from '../controllers/deleteSummary.controller.js';
import express from 'express';

const router = express.Router();

router.delete('/summary', deleteSummary);

export default router;