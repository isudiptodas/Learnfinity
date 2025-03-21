import express from 'express';
import { verifyEmail } from '../controllers/verifyEmail.controller.js';

const router = express.Router();

router.post('/email', verifyEmail);

export default router;