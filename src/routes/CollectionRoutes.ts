import express from 'express'
import { getALL, } from '../controllers/CollectionController'
 
const router = express.Router();

router.get('/collections', getALL)


export default router;