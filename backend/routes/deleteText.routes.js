import { deleteText } from '../controllers/deleteText.controller.js';
import express from 'express';

const router = express.Router();

router.delete('/text', deleteText);

export default router;