import express from 'express';
import meController from '../application/controllers/MeController.js';

const router = express.Router();

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

export default router;
