import { Router } from 'express';
import { info } from '../controller/start.js';
const router = new Router();

const start = router.get('/', info);

export { start };