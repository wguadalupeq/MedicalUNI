import { Router } from 'express';
import { start } from './routes/start.js';
import { home } from './routes/home.js';
import { user } from './routes/user.js';
import { cite } from './routes/cite.js';
const router = new Router();


const backend = router.get('/', (req, res) => {
    res.send({ title: "Hello Backend" })
});


export { backend, home, start, user, cite };