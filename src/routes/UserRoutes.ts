import express from 'express'
import { getALL, getUserById, createUser, updateUser, destroyUserById } from '../controllers/UserController'
 
const router = express.Router();

router.get('/users', getALL)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', destroyUserById)

export default router;