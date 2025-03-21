import express from 'express';
import { addEvent, fetchEvents, updateEvent, deleteEvent } from '../controllers/events.controller.js';
import { authenticateUser } from '../middlewares/useridMiddleware.js';

const router = express.Router();

router.post('/add/event', authenticateUser, addEvent);
router.get('/fetch/events', fetchEvents);
router.put('/update/event/:id', updateEvent);
router.delete('/delete/event/:id', deleteEvent);

export default router;