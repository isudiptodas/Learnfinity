import express from 'express';
import { subscribe } from '../controllers/subscribe.controller.js';

const router = express.Router();

router.put('/subscribe', subscribe);

export default router;