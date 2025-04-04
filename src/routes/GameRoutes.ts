import express from 'express'
import {getALL, getGameById, createGame, updateGame, destroyGameById } from '../controllers/GameController'
 
const router = express.Router();

router.get('/games', getALL)
router.get('/games/:id', getGameById)
router.post('/games/', createGame)
router.put('/games/:id', updateGame)
router.delete('/games/:id',destroyGameById)

export default router;