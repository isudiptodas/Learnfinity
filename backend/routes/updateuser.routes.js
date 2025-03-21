import express from 'express';
import { authenticateUser } from '../middlewares/useridMiddleware.js';
import { updateUser } from '../controllers/updateuser.controller.js';

const router = express.Router();

router.put("/details/update",authenticateUser, updateUser);

export default router;