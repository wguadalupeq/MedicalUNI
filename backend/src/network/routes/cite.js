import { create, update, deleted, deletedUserID, find, findAllUser, findAll, citeID } from '../controller/cite.js'
import { Router } from 'express';
const router = new Router();

const cite = router
    .get('/', findAll)
    .get('/:id',citeID)
    .post('/', create)
    .post('/update', update)
    .post('/deleted', deleted)
    .post('/deletedUserID', deletedUserID)
    .post('/findAllUser', findAllUser)
    .post('/find', find)

export { cite };