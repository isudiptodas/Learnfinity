import express from 'express';
import { upload } from '../middlewares/uploadMiddleware.js';
import { convertFile } from '../controllers/pdfConvert.controller.js';

const router = express.Router();

router.post('/upload', upload.single('file'), convertFile);

export default router;