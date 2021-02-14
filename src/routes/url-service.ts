import { Router } from 'express';
import createUrlRouter from './create-url';
import getUrlRouter from './get-url';

const router = Router();

router.use('/api/v1', createUrlRouter);
router.use(getUrlRouter);

export default router;
