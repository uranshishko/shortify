import express from 'express';
import createUrlController from '../controllers/create-url';

const router = express.Router();

router.post('/shortify', createUrlController);

export default router;
