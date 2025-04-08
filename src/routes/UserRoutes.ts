import express from 'express'
import { getALL, getUserById, createUser, updateUser, destroyUserById } from '../controllers/UserController'
 
import { authMiddleware } from '../middleware/authMiddleware' 

const router = express.Router();

// rota publica 
router.post('/users', createUser)


router.get('/users',  authMiddleware, getALL)
router.get('/users/:id', getUserById)
router.put('/users/:id',authMiddleware, updateUser)
router.delete('/users/:id',authMiddleware, destroyUserById)

export default router;