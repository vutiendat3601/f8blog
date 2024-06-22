import express from 'express';
import siteController from '../application/controllers/SiteController.js';

const router = express.Router();

router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
