import express from 'express';
import newsController from '../application/controllers/NewsController.js';

const router = express.Router();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
