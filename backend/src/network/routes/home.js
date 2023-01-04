import { Router } from 'express';
const router = new Router();

const home = router.get('/home', (req, res) => {
    res.json({
        name: 'Welcome',
    });
});

export { home };