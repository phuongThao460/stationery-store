import express from 'express'
import { Get_Loai_SPs, Get_Loai_SP_By_ID, Create_Loai_SP } from '../controller/loai_sp.js'

const router = express.Router()

router.get('/', Get_Loai_SPs)
router.post('/', Get_Loai_SP_By_ID)
router.post('/create_loai_sp', Create_Loai_SP)

export default router