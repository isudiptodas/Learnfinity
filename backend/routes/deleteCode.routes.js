import { deleteCode } from '../controllers/deleteCode.controller.js';
import express from 'express';

const router = express.Router();

router.delete('/code', deleteCode);

export default router;