import express from 'express'
import { Get_Phan_Loais, Get_Phan_Loai_By_ID } from '../controller/phan_loai.js'

const router = express.Router()

router.get('/', Get_Phan_Loais)
router.post('/', Get_Phan_Loai_By_ID)

export default router