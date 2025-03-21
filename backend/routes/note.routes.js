import express from 'express';
import { addNote, showNotes, updateNote, deleteNote } from '../controllers/note.controller.js'
import { authenticateUser } from '../middlewares/useridMiddleware.js'

const router = express.Router();

router.post("/add",authenticateUser, addNote);
router.post("/all-notes",authenticateUser, showNotes);
router.put("/update/:id",authenticateUser, updateNote);
router.delete("/delete/:id",authenticateUser, deleteNote);

export default router;