import { create, update, deleted, find, findAll, userID } from '../controller/user.js'
import { Router } from 'express';
const router = new Router();

const user = router
    .get('/', findAll)
    .get('/:id',userID)
    .post('/', create)
    .post('/update', update)
    .post('/deleted', deleted)
    .post('/find', find)

export { user };