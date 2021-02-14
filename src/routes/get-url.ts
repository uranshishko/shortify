import { Router } from 'express';
import getUrlController from '../controllers/get-url';

const router = Router();

router.get('/:path', getUrlController);

export default router;
