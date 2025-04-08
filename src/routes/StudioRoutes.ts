import express from 'express'
import { getALL, getStudioById, createStudio, updateStudio, destroyStudioById } from '../controllers/StudioController'
import { authMiddleware } from '../middleware/authMiddleware';
 
const router = express.Router();

router.get('/studios', getALL)
router.get('/studios/:id', getStudioById)
router.post('/studios', createStudio)
router.put('/studios/:id', updateStudio)
router.delete('/studios/:id', destroyStudioById)

export default router;